// app.js

let fuse;

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
  return items.map((item) => ({
    ...item,
    searchableText: normalizeText([
      item.title || "",
      item.problem || "",
      item.solution || "",
      ...(item.steps || []),
      ...(item.aliases || [])
    ].join(" "))
  }));
}

function initFuse() {
  const preparedData = enrichData(data);

  const options = {
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
  };

  fuse = new Fuse(preparedData, options);
}

function formatAnswer(item, confidenceLabel) {
  let html = "";
  html += `<h4>${item.title}</h4>`;
  html += `<p><strong>Problema:</strong> ${item.problem}</p>`;
  html += `<p><strong>Solução:</strong> ${item.solution}</p>`;

  if (item.steps && item.steps.length) {
    html += `<p><strong>Como proceder:</strong></p><ul>`;
    item.steps.forEach(step => {
      html += `<li>${step}</li>`;
    });
    html += `</ul>`;
  }

  if (confidenceLabel) {
    html += `<p><em>Confiança: ${confidenceLabel}</em></p>`;
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

  const fallback = data
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

function handleQuestion() {
  const input = document.getElementById("question-input");
  const question = input.value.trim();

  if (!question) return;

  addMessage(question, "question");

  document.getElementById("alberto").style.display = "none";
  document.getElementById("chat-area").classList.remove("hidden");

  const results = fuse.search(question);
  const decision = decideAnswer(question, results);

  if (decision.mode === "answer") {
    addMessage(formatAnswer(decision.item, decision.confidence), "answer");
  } else if (decision.mode === "suggest") {
    let html = `<p>Não encontrei uma correspondência exata. Talvez queiras dizer:</p><ul>`;
    decision.suggestions.forEach(item => {
      html += `<li><strong>${item.title}</strong></li>`;
    });
    html += `</ul><p>Tenta reformular com outras palavras.</p>`;
    addMessage(html, "answer");
  } else {
    addMessage(`<p>Não encontrei nenhuma correspondência relevante.</p>`, "answer");
  }

  input.value = "";
}

function resetChat() {
  const chatArea = document.getElementById("chat-area");
  chatArea.innerHTML = "";
  chatArea.classList.add("hidden");
  document.getElementById("alberto").style.display = "block";
  document.getElementById("question-input").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  initFuse();

  document.getElementById("ask-btn").addEventListener("click", handleQuestion);

  document.getElementById("question-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQuestion();
    }
  });

  document.getElementById("clear-btn").addEventListener("click", resetChat);
});
