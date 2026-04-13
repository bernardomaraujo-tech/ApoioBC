import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Copy,
  Filter,
  Info,
  RefreshCw,
  Search,
  Shield,
  User,
  Wrench
} from "lucide-react";
import { KNOWLEDGE_BASE } from "./data/knowledgeBase.js";
import { getRelatedCases, searchKnowledgeBase } from "./utils/search.js";
import {
  getStoredProfile,
  getStoredQuery,
  setStoredProfile,
  setStoredQuery,
} from "./utils/storage.js";

function ProfileSelector({ profile, onChange }) {
  return (
    <section className="profile-block">
      <p className="eyebrow">BC Support</p>
      <h1>Como te identificas?</h1>
      <p className="subtitle">
        Escolhe o perfil para ajustar o tom e o nível de detalhe das respostas.
      </p>

      <div className="profile-grid">
        <button
          className={profile === "agent" ? "profile-card active" : "profile-card"}
          onClick={() => onChange("agent")}
          type="button"
        >
          <div className="profile-icon"><Shield size={22} /></div>
          <div>
            <strong>Agente de Apoio</strong>
            <p>Respostas detalhadas com diagnóstico, validação e escalamento.</p>
          </div>
        </button>

        <button
          className={profile === "user" ? "profile-card active" : "profile-card"}
          onClick={() => onChange("user")}
          type="button"
        >
          <div className="profile-icon"><User size={22} /></div>
          <div>
            <strong>Utilizador</strong>
            <p>Respostas simples, diretas e orientadas ao que fazer.</p>
          </div>
        </button>
      </div>
    </section>
  );
}

function SearchBar({ query, setQuery, onSearch, onReset }) {
  return (
    <section className="search-shell">
      <div className="search-input-wrap">
        <Search size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Descreve a tua dúvida ou cola a mensagem de erro"
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
        />
      </div>

      <div className="search-actions">
        <button className="btn btn-primary" onClick={onSearch} type="button">
          <Search size={16} />
          Pesquisar
        </button>

        <button className="btn btn-secondary" onClick={onReset} type="button">
          <RefreshCw size={16} />
          Limpar
        </button>
      </div>
    </section>
  );
}

function SuggestionChips({ onPick }) {
  const suggestions = [
    "não consigo aprovar uma encomenda",
    "erro tipo lista preços e descontos não pode ser utilizado",
    "erro data de registo ao faturar",
    "dimensão padrão não existe",
    "erro e-mail tem que ter um valor em vendedor",
    "suplemento excel business central não funciona"
  ];

  return (
    <div className="chips">
      {suggestions.map((item) => (
        <button key={item} className="chip" type="button" onClick={() => onPick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

function ResultList({ results, selectedId, onSelect }) {
  return (
    <aside className="sidebar-card">
      <div className="sidebar-header">
        <div>
          <p className="eyebrow">Resultados</p>
          <h2>Casos encontrados</h2>
        </div>
        <span className="result-count">{results.length}</span>
      </div>

      {results.length === 0 ? (
        <div className="empty-state small">
          <AlertCircle size={18} />
          <p>Sem resultados ainda. Faz uma pesquisa para ver casos relacionados.</p>
        </div>
      ) : (
        <div className="result-list">
          {results.map(({ item, score }) => (
            <button
              key={item.id}
              type="button"
              className={selectedId === item.id ? "result-item active" : "result-item"}
              onClick={() => onSelect(item.id)}
            >
              <div className="result-meta">
                <span className="category">{item.category}</span>
                <span className="score">score {score}</span>
              </div>
              <strong>{item.title}</strong>
              <p>{item.common.problem}</p>
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}

function Section({ icon, title, children }) {
  if (!children) return null;
  return (
    <section className="answer-section">
      <div className="section-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function BulletList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="bullet-list">
      {items.map((item, idx) => (
        <li key={`${item}-${idx}`}>{item}</li>
      ))}
    </ul>
  );
}

function buildCopyText(item, profile, related) {
  const lines = [];
  lines.push(item.title);
  lines.push("");

  lines.push("Problema:");
  lines.push(item.common.problem);
  lines.push("");

  if (profile === "agent" && item.agentOnly?.context) {
    lines.push("Contexto:");
    lines.push(item.agentOnly.context);
    lines.push("");
  }

  if (profile === "agent" && item.agentOnly?.cause) {
    lines.push("Causa provável:");
    lines.push(item.agentOnly.cause);
    lines.push("");
  }

  lines.push("Solução:");
  lines.push(item.common.solution);
  lines.push("");

  if (item.common.steps?.length) {
    lines.push("Como proceder:");
    item.common.steps.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    lines.push("");
  }

  if (profile === "agent" && item.agentOnly?.diagnosis?.length) {
    lines.push("Como validar o diagnóstico:");
    item.agentOnly.diagnosis.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    lines.push("");
  }

  if (profile === "agent" && item.agentOnly?.validation?.length) {
    lines.push("Validação final:");
    item.agentOnly.validation.forEach((step, index) => lines.push(`${index + 1}. ${step}`));
    lines.push("");
  }

  if (item.common.notes?.length) {
    lines.push("Notas:");
    item.common.notes.forEach((note, index) => lines.push(`${index + 1}. ${note}`));
    lines.push("");
  }

  if (profile === "agent" && item.agentOnly?.escalation) {
    lines.push("Quando escalar:");
    lines.push(item.agentOnly.escalation);
    lines.push("");
  }

  if (related.length) {
    lines.push("Casos relacionados:");
    related.forEach((r) => lines.push(`- ${r.title}`));
  }

  return lines.join("\n");
}

function AnswerCard({ item, profile, related }) {
  const [copied, setCopied] = useState(false);

  if (!item) {
    return (
      <div className="answer-card empty">
        <div className="empty-state">
          <Info size={22} />
          <div>
            <h2>Sem resposta selecionada</h2>
            <p>Pesquisa um tema ou escolhe um dos resultados para veres a resposta completa.</p>
          </div>
        </div>
      </div>
    );
  }

  async function handleCopy() {
    const text = buildCopyText(item, profile, related);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <article className="answer-card">
      <div className="answer-header">
        <div>
          <div className="header-row">
            <span className="category-badge">{item.category}</span>
            <span className="mode-badge">{profile === "agent" ? "Modo Agente" : "Modo Utilizador"}</span>
          </div>
          <h2>{item.title}</h2>
        </div>

        <button className="btn btn-secondary" onClick={handleCopy} type="button">
          <Copy size={16} />
          {copied ? "Copiado" : "Copiar resposta"}
        </button>
      </div>

      <Section icon={<AlertCircle size={18} />} title="Problema">
        <p>{item.common.problem}</p>
      </Section>

      {profile === "agent" && (
        <>
          <Section icon={<Info size={18} />} title="Contexto">
            <p>{item.agentOnly?.context}</p>
          </Section>

          <Section icon={<Filter size={18} />} title="Causa provável">
            <p>{item.agentOnly?.cause}</p>
          </Section>

          <Section icon={<Search size={18} />} title="Como validar o diagnóstico">
            <BulletList items={item.agentOnly?.diagnosis} />
          </Section>
        </>
      )}

      <Section icon={<Wrench size={18} />} title="Solução">
        <p>{item.common.solution}</p>
      </Section>

      <Section icon={<ChevronRight size={18} />} title="Como proceder">
        <ol className="number-list">
          {item.common.steps.map((step, index) => (
            <li key={`${step}-${index}`}>{step}</li>
          ))}
        </ol>
      </Section>

      {profile === "agent" && (
        <Section icon={<CheckCircle2 size={18} />} title="Validação final">
          <BulletList items={item.agentOnly?.validation} />
        </Section>
      )}

      <Section icon={<Info size={18} />} title="Notas">
        <BulletList items={item.common.notes} />
      </Section>

      {profile === "agent" && (
        <Section icon={<AlertCircle size={18} />} title="Quando escalar">
          <p>{item.agentOnly?.escalation}</p>
        </Section>
      )}

      {related.length > 0 && (
        <Section icon={<ChevronRight size={18} />} title="Casos relacionados">
          <div className="related-list">
            {related.map((relatedItem) => (
              <div className="related-card" key={relatedItem.id}>
                <span>{relatedItem.category}</span>
                <strong>{relatedItem.title}</strong>
              </div>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}

export default function App() {
  const [profile, setProfile] = useState(getStoredProfile());
  const [query, setQuery] = useState(getStoredQuery());
  const [submittedQuery, setSubmittedQuery] = useState(getStoredQuery());
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => setStoredProfile(profile), [profile]);
  useEffect(() => setStoredQuery(query), [query]);

  const results = useMemo(() => {
    return submittedQuery ? searchKnowledgeBase(KNOWLEDGE_BASE, submittedQuery) : [];
  }, [submittedQuery]);

  useEffect(() => {
    if (results.length > 0) setSelectedId(results[0].item.id);
    else setSelectedId(null);
  }, [submittedQuery]);

  const selectedItem = useMemo(() => {
    return results.find((entry) => entry.item.id === selectedId)?.item || null;
  }, [results, selectedId]);

  const related = useMemo(() => {
    return selectedItem ? getRelatedCases(KNOWLEDGE_BASE, selectedItem.agentOnly?.relatedCases || []) : [];
  }, [selectedItem]);

  function handleSearch() {
    setSubmittedQuery(query.trim());
  }

  function handleReset() {
    setQuery("");
    setSubmittedQuery("");
    setSelectedId(null);
  }

  function handlePickSuggestion(value) {
    setQuery(value);
    setSubmittedQuery(value);
  }

  return (
    <div className="app-shell">
      <div className="app-container">
        <ProfileSelector profile={profile} onChange={setProfile} />

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          onReset={handleReset}
        />

        <SuggestionChips onPick={handlePickSuggestion} />

        <div className="content-grid">
          <ResultList results={results} selectedId={selectedId} onSelect={setSelectedId} />
          <AnswerCard item={selectedItem} profile={profile} related={related} />
        </div>
      </div>
    </div>
  );
}