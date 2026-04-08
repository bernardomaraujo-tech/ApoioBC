/*
 * Lógica principal do assistente Business Central.
 * Este ficheiro carrega a base de conhecimento, inicializa o motor Fuse.js
 * para fuzzy search e gere a interface de perguntas/respostas.
 */

// Inicializa Fuse.js com a base de conhecimento carregada em data.js
let fuse;

function initFuse() {
  const options = {
    includeScore: true,
    includeMatches: true,
    shouldSort: true,
    isCaseSensitive: false,
    ignoreLocation: true,
    minMatchCharLength: 2,
    threshold: 0.35,
    keys: [
      { name: "title", weight: 0.35 },
      { name: "problem", weight: 0.35 },
      { name: "solution", weight: 0.2 },
      { name: "steps", weight: 0.08 },
      { name: "aliases", weight: 0.02 }
    ]
  };
  fuse = new Fuse(data, options);
}

// Formata uma resposta estruturada com título, problema, solução e passos
function formatAnswer(item, confidenceLabel) {
  let html = `<div class="message answer">`;
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
  html += `</div>`;
  return html;
}

// Decide se deve responder automaticamente ou sugerir alternativas
function decideAnswer(results) {
  if (!results || !results.length) return { mode: "nohit" };
  const top = results[0];
  const second = results.length > 1 ? results[1] : null;
  const score = top.score != null ? top.score : 1;
  const gap = second ? (second.score - score) : 1;
  // Score baixo (confiança alta)
  if (score <= 0.25) return { mode: "answer", item: top.item, confidence: "alta" };
  // Score aceitável e diferença visível para segundo
  if (score <= 0.38 && gap >= 0.05) return { mode: "answer", item: top.item, confidence: "média" };
  // Caso contrário sugerir
  return { mode: "suggest", suggestions: results.slice(0, 3).map(r => r.item) };
}

// Adiciona mensagem ao chat (pergunta ou resposta)
function addMessage(content, type = "answer") {
  const chatArea = document.getElementById("chat-area");
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = content;
  chatArea.appendChild(div);
}

// Responde à pergunta introduzida
function handleQuestion() {
  const input = document.getElementById("question-input");
  const question = input.value.trim();
  if (!question) return;
  // Se histórico está ativado, mostrar a pergunta no chat
  addMessage(question, "question");
  // Fazer pesquisa
  const results = fuse.search(question);
  const decision = decideAnswer(results);
  // Esconder avatar e mostrar chat area
  document.getElementById("alberto").style.display = "none";
  document.getElementById("chat-area").classList.remove("hidden");
  if (decision.mode === "answer") {
    const answerHtml = formatAnswer(decision.item, decision.confidence);
    addMessage(answerHtml, "answer");
  } else if (decision.mode === "suggest") {
    // Criar bloco de sugestões
    let html = `<div class="message answer"><p>Não encontrei uma resposta exata. Queres dizer:</p><ul>`;
    decision.suggestions.forEach(item => {
      html += `<li><strong>${item.title}</strong></li>`;
    });
    html += `</ul><p>Tenta reformular a pergunta.</p></div>`;
    addMessage(html, "answer");
  } else {
    addMessage(`<p>Não encontrei nenhuma correspondência.</p>`, "answer");
  }
  // Limpar input
  input.value = "";
}

function resetChat() {
  const chatArea = document.getElementById("chat-area");
  chatArea.innerHTML = "";
  chatArea.classList.add("hidden");
  document.getElementById("alberto").style.display = "block";
  document.getElementById("question-input").value = "";
}

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  // Inicializar Fuse apenas quando data estiver carregada
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