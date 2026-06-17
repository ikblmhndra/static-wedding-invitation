const GUEST_NAME_MAX_LENGTH = 80;

export function normalizeGuestName(value: string | null | undefined) {
  if (!value) {
    return "";
  }

  return value.replace(/\+/g, " ").replace(/\s+/g, " ").trim().slice(0, GUEST_NAME_MAX_LENGTH);
}

export function getGuestNameFromSearch(search: string) {
  const params = new URLSearchParams(search);
  return normalizeGuestName(params.get("to"));
}
