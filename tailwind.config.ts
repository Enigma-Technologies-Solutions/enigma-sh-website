import type { Config } from "tailwindcss";

// Tailwind supplies only its base reset (preflight); the site's styles are in
// client/site.css.
export default {
  content: ["./client/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
