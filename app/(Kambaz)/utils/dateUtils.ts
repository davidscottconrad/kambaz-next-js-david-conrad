export const dateObjectToHtmlDateString = (date: Date) => {
  // Your helper, with the day +1 bug fixed and proper zero-padding
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0"); // 01..12
  const d = String(date.getDate()).padStart(2, "0");      // 01..31
  return `${y}-${m}-${d}`; // "YYYY-MM-DD"
};
export const prettyDate = (v?: string) => {
  if (!v) return null;
  const d = new Date(`${v}T00:00`);
  if (isNaN(d.getTime())) return v;
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric", month: "short", day: "numeric",
  }).format(d);
};