function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsPhrase(text, phrase) {
  return text.includes(phrase);
}

export function getSearchIndex(item) {
  const parts = [
    item.title,
    item.category,
    ...(item.aliases || []),
    ...(item.keywords || []),
    ...(item.errorPatterns || []),
    item.common?.problem,
    item.common?.solution,
    item.agentOnly?.context,
    item.agentOnly?.cause,
  ];

  return normalizeText(parts.filter(Boolean).join(" | "));
}

export function scoreItem(item, query) {
  const normalizedQuery = normalizeText(query);
  const index = getSearchIndex(item);

  if (!normalizedQuery) return 0;

  let score = 0;

  if (containsPhrase(index, normalizedQuery)) score += 120;

  for (const alias of item.aliases || []) {
    const a = normalizeText(alias);
    if (a && containsPhrase(normalizedQuery, a)) score += 80;
    if (a && containsPhrase(index, a) && containsPhrase(normalizedQuery, a.split(" ")[0])) score += 15;
  }

  for (const pattern of item.errorPatterns || []) {
    const p = normalizeText(pattern);
    if (p && containsPhrase(normalizedQuery, p)) score += 140;
  }

  const words = normalizedQuery.split(" ").filter(Boolean);
  for (const word of words) {
    if (word.length < 2) continue;
    if (containsPhrase(normalizeText(item.title), word)) score += 22;
    if ((item.keywords || []).some((k) => normalizeText(k) === word)) score += 20;
    if (containsPhrase(index, word)) score += 6;
  }

  return score;
}

export function searchKnowledgeBase(items, query) {
  return [...items]
    .map((item) => ({ item, score: scoreItem(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function getRelatedCases(items, caseIds = []) {
  const lookup = new Map(items.map((item) => [item.id, item]));
  return caseIds.map((id) => lookup.get(id)).filter(Boolean);
}

export function normalizeForUi(value = "") {
  return normalizeText(value);
}
