import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  ChevronRight,
  Copy,
  Info,
  Search,
  Shield,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import { SUPPORT_CASES } from "./data/supportCases.js";
import { getVisibleCases, searchSupportCases } from "./utils/search.js";
import {
  getStoredProfile,
  getStoredQuery,
  setStoredProfile,
  setStoredQuery,
} from "./utils/storage.js";

const INTRO_MESSAGE = [
  "Olá eu sou o Alberto!",
  "Para te poder ajudar da melhor forma, podes dizer-me se és:",
];

const PROFILE_CONFIRMATION = [
  "Em função desta resposta a resposta à questão seguinte vai ser condicionada.",
  "Como te posso ajudar?",
];

const SUGGESTIONS = [
  "erro OCR vírgula casas decimais",
  "não consigo aprovar uma encomenda",
  "template não identificado",
  "erro data de registo ao faturar",
  "série AGT não comunicada",
  "lista de preços com erro",
];

function Typewriter({ lines, onDone, speed = 24, lineDelay = 420, startKey }) {
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let active = true;
    let timeoutId;

    async function run() {
      const result = [];
      for (const line of lines) {
        let current = "";
        result.push(current);
        setDisplayed([...result]);

        for (const char of line) {
          if (!active) return;
          current += char;
          result[result.length - 1] = current;
          setDisplayed([...result]);
          await new Promise((resolve) => {
            timeoutId = window.setTimeout(resolve, speed);
          });
        }

        await new Promise((resolve) => {
          timeoutId = window.setTimeout(resolve, lineDelay);
        });
      }

      if (active && onDone) onDone();
    }

    run();

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
    };
  }, [lines, onDone, speed, lineDelay, startKey]);

  return (
    <div className="assistant-lines">
      {displayed.map((line, index) => (
        <p key={`${startKey}-${index}`}>
          {line}
          {index === displayed.length - 1 ? <span className="caret">|</span> : null}
        </p>
      ))}
    </div>
  );
}

function ProfileButtons({ profile, onSelect, visible }) {
  if (!visible) return null;

  return (
    <div className="choice-grid">
      <button
        type="button"
        className={profile === "agent" ? "choice-card active" : "choice-card"}
        onClick={() => onSelect("agent")}
      >
        <div className="choice-icon"><Shield size={20} /></div>
        <div>
          <strong>Agente de Apoio</strong>
          <p>Diagnóstico, validação, contexto e detalhe técnico.</p>
        </div>
      </button>

      <button
        type="button"
        className={profile === "user" ? "choice-card active" : "choice-card"}
        onClick={() => onSelect("user")}
      >
        <div className="choice-icon"><User size={20} /></div>
        <div>
          <strong>Utilizador</strong>
          <p>Resposta direta, simples e focada no que fazer.</p>
        </div>
      </button>
    </div>
  );
}

function SearchComposer({ query, setQuery, onSearch, enabled }) {
  return (
    <div className={enabled ? "composer" : "composer disabled"}>
      <div className="composer-input-wrap">
        <Search size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escreve a tua questão"
          disabled={!enabled}
          onKeyDown={(e) => {
            if (enabled && e.key === "Enter") onSearch();
          }}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={onSearch} disabled={!enabled}>
        Pesquisar
      </button>
    </div>
  );
}

function SuggestionChips({ onPick, visible }) {
  if (!visible) return null;

  return (
    <div className="chips">
      {SUGGESTIONS.map((item) => (
        <button key={item} className="chip" type="button" onClick={() => onPick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

function ResultList({ results, selectedId, onSelect, profile }) {
  return (
    <aside className="panel sidebar-panel">
      <div className="panel-head">
        <div>
          <p className="eyebrow">Resultados</p>
          <h2>{results.length ? "Casos encontrados" : "Sem resultados"}</h2>
        </div>
        <span className="pill">{results.length}</span>
      </div>

      <p className="panel-note">
        {profile === "agent"
          ? "Estás a ver os casos disponíveis para agente de apoio."
          : "Estás a ver apenas os casos disponíveis para utilizador."}
      </p>

      {results.length === 0 ? (
        <div className="empty-box small">
          <AlertCircle size={18} />
          <p>Faz uma pesquisa para mostrar os apoios disponíveis para este perfil.</p>
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
              <div className="result-top">
                <span className="tag">{item.product}</span>
                <span className="score">score {score}</span>
              </div>
              <strong>{item.title}</strong>
              <p>{item.solution}</p>
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
    <section className="detail-section">
      <div className="detail-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="detail-body">{children}</div>
    </section>
  );
}

function BulletList({ items, ordered = false }) {
  if (!items || items.length === 0) return null;
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag className={ordered ? "ordered-list" : "bullet-list"}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ListTag>
  );
}

function buildCopyText(item, profile) {
  const lines = [];
  lines.push(item.title);
  lines.push("");
  lines.push(`Produto: ${item.product}`);
  lines.push(`Categoria: ${item.category}`);
  lines.push("");

  if (item.context) {
    lines.push("Contexto:");
    lines.push(item.context);
    lines.push("");
  }

  if (profile === "agent" && item.cause) {
    lines.push("Causa provável:");
    lines.push(item.cause);
    lines.push("");
  }

  if (profile === "agent" && item.diagnosis?.length) {
    lines.push("Como validar diagnóstico:");
    item.diagnosis.forEach((entry, index) => lines.push(`${index + 1}. ${entry}`));
    lines.push("");
  }

  if (item.solution) {
    lines.push("Solução:");
    lines.push(item.solution);
    lines.push("");
  }

  if (item.steps?.length) {
    lines.push("Como proceder:");
    item.steps.forEach((entry, index) => lines.push(`${index + 1}. ${entry}`));
    lines.push("");
  }

  if (item.validation?.length) {
    lines.push("Validação final:");
    item.validation.forEach((entry, index) => lines.push(`${index + 1}. ${entry}`));
    lines.push("");
  }

  if (item.notes?.length) {
    lines.push("Notas:");
    item.notes.forEach((entry, index) => lines.push(`${index + 1}. ${entry}`));
  }

  return lines.join("\n");
}

function DetailCard({ item, profile }) {
  const [copied, setCopied] = useState(false);

  if (!item) {
    return (
      <section className="panel detail-panel empty-panel">
        <div className="empty-box">
          <Info size={20} />
          <div>
            <h2>Nenhum caso selecionado</h2>
            <p>Depois de pesquisares, escolhe um resultado para veres o detalhe completo.</p>
          </div>
        </div>
      </section>
    );
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(buildCopyText(item, profile));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="panel detail-panel">
      <div className="panel-head detail-head">
        <div>
          <div className="badges-row">
            <span className="tag">{item.product}</span>
            <span className="tag soft">{item.category}</span>
            <span className="tag soft">{profile === "agent" ? "Modo Agente" : "Modo Utilizador"}</span>
          </div>
          <h2>{item.title}</h2>
        </div>

        <button className="btn btn-secondary" type="button" onClick={handleCopy}>
          <Copy size={16} />
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      <Section icon={<Info size={18} />} title="Contexto">
        <p>{item.context || "Sem contexto adicional."}</p>
      </Section>

      {profile === "agent" && (
        <Section icon={<AlertCircle size={18} />} title="Causa provável">
          <p>{item.cause || "Sem causa registada."}</p>
        </Section>
      )}

      {profile === "agent" && (
        <Section icon={<Search size={18} />} title="Como validar diagnóstico">
          <BulletList items={item.diagnosis} />
        </Section>
      )}

      <Section icon={<Wrench size={18} />} title="Solução">
        <p>{item.solution || "Sem solução registada."}</p>
      </Section>

      <Section icon={<ChevronRight size={18} />} title="Como proceder">
        <BulletList items={item.steps} ordered />
      </Section>

      <Section icon={<CheckCircle2 size={18} />} title="Validação final">
        <BulletList items={item.validation} />
      </Section>

      <Section icon={<Sparkles size={18} />} title="Notas">
        <BulletList items={item.notes} />
      </Section>
    </section>
  );
}

export default function App() {
  const [profile, setProfile] = useState(getStoredProfile());
  const [query, setQuery] = useState(getStoredQuery());
  const [submittedQuery, setSubmittedQuery] = useState(getStoredQuery());
  const [selectedId, setSelectedId] = useState(null);
  const [introDone, setIntroDone] = useState(false);
  const [profileFlowDone, setProfileFlowDone] = useState(Boolean(getStoredProfile()));
  const [typingPhase, setTypingPhase] = useState(getStoredProfile() ? "complete" : "intro");
  const resultsRef = useRef(null);

  useEffect(() => {
    if (profile) {
      setStoredProfile(profile);
    }
  }, [profile]);

  useEffect(() => {
    setStoredQuery(query);
  }, [query]);

  const visibleCases = useMemo(() => getVisibleCases(SUPPORT_CASES, profile), [profile]);

  const results = useMemo(() => {
    if (!submittedQuery) return [];
    return searchSupportCases(visibleCases, submittedQuery);
  }, [visibleCases, submittedQuery]);

  const selectedItem = useMemo(() => {
    return results.find((entry) => entry.item.id === selectedId)?.item || null;
  }, [results, selectedId]);

  useEffect(() => {
    if (results.length > 0) {
      setSelectedId(results[0].item.id);
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setSelectedId(null);
    }
  }, [submittedQuery, results.length]);

  function handleProfileSelection(nextProfile) {
    setProfile(nextProfile);
    setProfileFlowDone(true);
    setTypingPhase("profile-confirmation");
  }

  function handleSearch() {
    const finalQuery = query.trim();
    setSubmittedQuery(finalQuery);
  }

  function handleSuggestion(value) {
    setQuery(value);
    setSubmittedQuery(value);
  }

  return (
    <div className="app-shell">
      <div className="app-container">
        <section className="hero-chat panel">
          <div className="hero-top">
            <div className="assistant-avatar"><Bot size={20} /></div>
            <div>
              <p className="eyebrow">BC Support</p>
              <h1>Assistente de apoio</h1>
            </div>
          </div>

          <div className="chat-bubble assistant">
            {typingPhase === "intro" && (
              <Typewriter
                lines={INTRO_MESSAGE}
                startKey="intro"
                onDone={() => {
                  setIntroDone(true);
                  if (!profileFlowDone) return;
                  setTypingPhase("complete");
                }}
              />
            )}

            {typingPhase !== "intro" && (
              <div className="assistant-lines static">
                {INTRO_MESSAGE.map((line) => <p key={line}>{line}</p>)}
              </div>
            )}
          </div>

          <ProfileButtons
            profile={profile}
            onSelect={handleProfileSelection}
            visible={introDone || typingPhase !== "intro"}
          />

          {profileFlowDone && (
            <div className="chat-bubble user-choice">
              <span>Perfil selecionado:</span>
              <strong>{profile === "agent" ? "Agente de Apoio" : "Utilizador"}</strong>
            </div>
          )}

          {typingPhase === "profile-confirmation" && (
            <div className="chat-bubble assistant">
              <Typewriter
                lines={PROFILE_CONFIRMATION}
                startKey="profile-confirmation"
                onDone={() => setTypingPhase("complete")}
              />
            </div>
          )}

          {typingPhase === "complete" && profileFlowDone && (
            <>
              <div className="chat-bubble assistant">
                <div className="assistant-lines static">
                  {PROFILE_CONFIRMATION.map((line) => <p key={line}>{line}</p>)}
                </div>
              </div>

              <SearchComposer
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                enabled={true}
              />
            </>
          )}
        </section>

        <SuggestionChips onPick={handleSuggestion} visible={typingPhase === "complete"} />

        <div className="stats-row">
          <div className="stat-card">
            <strong>{SUPPORT_CASES.length}</strong>
            <span>casos carregados do Excel</span>
          </div>
          <div className="stat-card">
            <strong>{visibleCases.length}</strong>
            <span>casos visíveis neste perfil</span>
          </div>
          <div className="stat-card">
            <strong>{profile === "agent" ? "Agente" : "Utilizador"}</strong>
            <span>modo ativo</span>
          </div>
        </div>

        <div className="content-grid" ref={resultsRef}>
          <ResultList results={results} selectedId={selectedId} onSelect={setSelectedId} profile={profile} />
          <DetailCard item={selectedItem} profile={profile} />
        </div>
      </div>
    </div>
  );
}
