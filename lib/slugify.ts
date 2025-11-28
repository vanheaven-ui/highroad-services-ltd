export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replaces one+ non-alphanum with single '-'
    .replace(/-+$/, ""); // Trim trailing '-' (fixes the issue!)
}
