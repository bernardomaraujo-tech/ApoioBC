export const PROFILE_KEY = "bc_support_profile";
export const LAST_QUERY_KEY = "bc_support_last_query";

export function getStoredProfile() {
  return localStorage.getItem(PROFILE_KEY) || "agent";
}

export function setStoredProfile(profile) {
  localStorage.setItem(PROFILE_KEY, profile);
}

export function getStoredQuery() {
  return localStorage.getItem(LAST_QUERY_KEY) || "";
}

export function setStoredQuery(query) {
  localStorage.setItem(LAST_QUERY_KEY, query);
}
