const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta"
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Jakarta"
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Jakarta"
});

export function formatLongDate(date: string) {
  return longDateFormatter.format(new Date(date));
}

export function formatShortDate(date: string) {
  return shortDateFormatter.format(new Date(date));
}

export function formatTime(date: string) {
  return timeFormatter.format(new Date(date));
}
