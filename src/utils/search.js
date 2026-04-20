function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildIndex(item) {
  return normalizeText([
    item.title,
    item.product,
    item.category,
    item.context,
    item.cause,
    item.solution,
    ...(item.diagnosis || []),
    ...(item.steps || []),
    ...(item.validation || []),
    ...(item.notes || []),
  ].filter(Boolean).join(" | "));
}

function scoreItem(item, query) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return 0;

  const index = buildIndex(item);
  const words = normalizedQuery.split(" ").filter(Boolean);
  let score = 0;

  if (index.includes(normalizedQuery)) score += 140;
  if (normalizeText(item.title).includes(normalizedQuery)) score += 160;

  for (const word of words) {
    if (word.length < 2) continue;
    if (normalizeText(item.title).includes(word)) score += 28;
    if (normalizeText(item.category).includes(word)) score += 20;
    if (normalizeText(item.product).includes(word)) score += 16;
    if (index.includes(word)) score += 8;
  }

  return score;
}

export function getVisibleCases(items, profile) {
  return items.filter((item) => item.visibility?.[profile]);
}

export function searchSupportCases(items, query) {
  return [...items]
    .map((item) => ({ item, score: scoreItem(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
}
