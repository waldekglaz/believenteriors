// Coming-soon / maintenance fallback.
//
// false → the normal site is live (default).
// true  → the holding page replaces every route (no header/footer, noindex).
//
// Flip this one line to take the site down to the holding page, then flip it
// back to relaunch. (You can also override it per-environment without editing
// code by setting NEXT_PUBLIC_COMING_SOON=true.)
export const COMING_SOON =
  (process.env.NEXT_PUBLIC_COMING_SOON ?? "false").toLowerCase() === "true";
