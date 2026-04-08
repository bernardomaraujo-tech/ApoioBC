let fuse;
let preparedData = [];
let activeSuggestions = [];
let activeSuggestionIndex = -1;

function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function enrichData(items) {
  return items.map((item) => {
    const aliases = Array.isArray(item.aliases) ? item.aliases : [];
    const searchableText = normalizeText([
      item.title || "",
      item.problem || "",
      item.solution || "",
      ...(item.steps || []),
      ...aliases
    ].join(" "));

    return {
      ...item,
      aliases,
      searchableText,
      suggestionPool: [
        item.title || "",
        ...aliases
      ].filter(Boolean)
    };
  });
}

function initFuse() {
  preparedData = enrichData(data);

  fuse = new Fuse(preparedData, {
    includeScore: true,
    includeMatches: true,
    shouldSort: true,
    isCaseSensitive: false,
    ignoreLocation: true,
    ignoreFieldNorm: false,
    threshold: 0.55,
    minMatchCharLength: 2,
    keys: [
      { name: "title", weight: 0.30 },
      { name: "problem", weight: 0.30 },
      { name: "solution", weight: 0.18 },
      { name: "steps", weight: 0.12 },
      { name: "aliases", weight: 0.10 }
    ]
  });
}

function escapeHtml(text) {
  return (text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatAnswer(item, confidenceLabel) {
  let html = "";
  html += `<h4>${escapeHtml(item.title)}</h4>`;
  html += `<p><strong>Problema:</strong> ${escapeHtml(item.problem)}</p>`;
  html += `<p><strong>Solução:</strong> ${escapeHtml(item.solution)}</p>`;

  if (item.steps && item.steps.length) {
    html += `<p><strong>Como proceder:</strong></p><ul>`;
    item.steps.forEach(step => {
      html += `<li>${escapeHtml(step)}</li>`;
    });
    html += `</ul>`;
  }

  if (confidenceLabel) {
    html += `<p><em>Confiança: ${escapeHtml(confidenceLabel)}</em></p>`;
  }

  return html;
}

function getKeywordScore(question, item) {
  const q = normalizeText(question);
  const text = item.searchableText || "";
  const words = q.split(" ").filter(w => w.length > 2);

  let matches = 0;
  words.forEach(word => {
    if (text.includes(word)) {
      matches++;
    }
  });

  return matches;
}

function decideAnswer(question, results) {
  if (results && results.length > 0) {
    const top = results[0];
    const second = results[1] || null;
    const score = top.score ?? 1;
    const gap = second ? second.score - score : 1;

    if (score <= 0.28) {
      return { mode: "answer", item: top.item, confidence: "alta" };
    }

    if (score <= 0.48 && gap >= 0.03) {
      return { mode: "answer", item: top.item, confidence: "média" };
    }

    if (score <= 0.62) {
      return {
        mode: "suggest",
        suggestions: results.slice(0, 3).map(r => r.item)
      };
    }
  }

  const fallback = preparedData
    .map(item => ({
      item,
      keywordScore: getKeywordScore(question, item)
    }))
    .sort((a, b) => b.keywordScore - a.keywordScore);

  if (fallback[0] && fallback[0].keywordScore >= 2) {
    return {
      mode: "answer",
      item: fallback[0].item,
      confidence: "aproximada"
    };
  }

  if (fallback[0] && fallback[0].keywordScore >= 1) {
    return {
      mode: "suggest",
      suggestions: fallback
        .filter(x => x.keywordScore >= 1)
        .slice(0, 3)
        .map(x => x.item)
    };
  }

  return { mode: "nohit" };
}

function addMessage(content, type = "answer") {
  const chatArea = document.getElementById("chat-area");
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = content;
  chatArea.appendChild(div);
}

function clearSuggestions() {
  const suggestionsBox = document.getElementById("suggestions-box");
  suggestionsBox.innerHTML = "";
  suggestionsBox.classList.add("hidden");
  activeSuggestions = [];
  activeSuggestionIndex = -1;
}

function buildSuggestionCandidates(query) {
  const normalizedQuery = normalizeText(query);
  const words = normalizedQuery.split(" ").filter(w => w.length > 1);
  const suggestionsMap = new Map();

  if (!normalizedQuery) return [];

  preparedData.forEach((item) => {
    let bestLabel = item.title;
    let bestScore = 0;

    item.suggestionPool.forEach((candidate) => {
      const candidateNorm = normalizeText(candidate);
      let score = 0;

      if (candidateNorm.includes(normalizedQuery)) {
        score += 12;
      }

      words.forEach(word => {
        if (candidateNorm.includes(word)) score += 4;
      });

      if (normalizeText(item.title).includes(normalizedQuery)) {
        score += 6;
      }

      if (score > bestScore) {
        bestScore = score;
        bestLabel = candidate;
      }
    });

    if (bestScore > 0) {
      const key = item.title;
      if (!suggestionsMap.has(key) || suggestionsMap.get(key).score < bestScore) {
        suggestionsMap.set(key, {
          title: item.title,
          label: bestLabel,
          score: bestScore
        });
      }
    }
  });

  const fuseResults = fuse.search(query).slice(0, 5);
  fuseResults.forEach((result, index) => {
    const item = result.item;
    const key = item.title;
    const fuseScore = (1 - (result.score ?? 1)) * 10 + (5 - index);

    if (!suggestionsMap.has(key) || suggestionsMap.get(key).score < fuseScore) {
      suggestionsMap.set(key, {
        title: item.title,
        label: item.title,
        score: fuseScore
      });
    }
  });

  return Array.from(suggestionsMap.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function renderSuggestions() {
  const suggestionsBox = document.getElementById("suggestions-box");

  if (!activeSuggestions.length) {
    clearSuggestions();
    return;
  }

  suggestionsBox.innerHTML = activeSuggestions
    .map((item, index) => {
      const isActive = index === activeSuggestionIndex ? " active" : "";
      return `
        <div class="suggestion-item${isActive}" data-index="${index}">
          <div class="suggestion-title">${escapeHtml(item.label)}</div>
          <div class="suggestion-subtitle">${escapeHtml(item.title)}</div>
        </div>
      `;
    })
    .join("");

  suggestionsBox.classList.remove("hidden");

  document.querySelectorAll(".suggestion-item").forEach((element) => {
    element.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const index = Number(element.getAttribute("data-index"));
      applySuggestion(index, true);
    });
  });
}

function showSuggestions(query) {
  const cleanQuery = query.trim();

  if (!cleanQuery) {
    clearSuggestions();
    return;
  }

  activeSuggestions = buildSuggestionCandidates(cleanQuery);
  activeSuggestionIndex = activeSuggestions.length ? 0 : -1;
  renderSuggestions();
}

function applySuggestion(index, submitImmediately = true) {
  if (index < 0 || index >= activeSuggestions.length) return;

  const selected = activeSuggestions[index];
  const input = document.getElementById("question-input");

  input.value = selected.label || selected.title;
  clearSuggestions();
  input.focus();

  if (submitImmediately) {
    handleQuestion();
  }
}

function moveSuggestionSelection(direction) {
  if (!activeSuggestions.length) return;

  if (activeSuggestionIndex === -1) {
    activeSuggestionIndex = 0;
  } else {
    activeSuggestionIndex += direction;

    if (activeSuggestionIndex < 0) {
      activeSuggestionIndex = activeSuggestions.length - 1;
    }

    if (activeSuggestionIndex >= activeSuggestions.length) {
      activeSuggestionIndex = 0;
    }
  }

  renderSuggestions();
}

function handleQuestion() {
  const input = document.getElementById("question-input");
  const question = input.value.trim();

  if (!question) return;

  addMessage(escapeHtml(question), "question");

  document.getElementById("alberto").style.display = "none";
  document.getElementById("chat-area").classList.remove("hidden");

  const results = fuse.search(question);
  const decision = decideAnswer(question, results);

  if (decision.mode === "answer") {
    addMessage(formatAnswer(decision.item, decision.confidence), "answer");
  } else if (decision.mode === "suggest") {
    let html = `<p>Não encontrei uma correspondência exata. Talvez queiras dizer:</p><ul>`;
    decision.suggestions.forEach(item => {
      html += `<li><strong>${escapeHtml(item.title)}</strong></li>`;
    });
    html += `</ul><p>Tenta reformular com outras palavras.</p>`;
    addMessage(html, "answer");
  } else {
    addMessage(`<p>Não encontrei nenhuma correspondência relevante.</p>`, "answer");
  }

  input.value = "";
  clearSuggestions();
}

function resetChat() {
  const chatArea = document.getElementById("chat-area");
  chatArea.innerHTML = "";
  chatArea.classList.add("hidden");
  document.getElementById("alberto").style.display = "block";
  document.getElementById("question-input").value = "";
  clearSuggestions();
}

window.addEventListener("DOMContentLoaded", () => {
  initFuse();

  document.getElementById("ask-btn").addEventListener("click", handleQuestion);
  document.getElementById("clear-btn").addEventListener("click", resetChat);

  const input = document.getElementById("question-input");

  input.addEventListener("input", (e) => {
    showSuggestions(e.target.value);
  });

  input.addEventListener("keydown", (e) => {
    if (!activeSuggestions.length) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleQuestion();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveSuggestionSelection(1);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveSuggestionSelection(-1);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (activeSuggestionIndex >= 0) {
        applySuggestion(activeSuggestionIndex, true);
      } else {
        handleQuestion();
      }
      return;
    }

    if (e.key === "Escape") {
      clearSuggestions();
    }
  });

  document.addEventListener("click", (e) => {
    const suggestionsBox = document.getElementById("suggestions-box");
    const composerArea = document.getElementById("composer-area");

    if (!composerArea.contains(e.target) && !suggestionsBox.contains(e.target)) {
      clearSuggestions();
    }
  });
});
