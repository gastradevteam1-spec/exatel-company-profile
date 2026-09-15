import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E23",
        "ink-2": "#141a3d",
        paper: "#F4F5F9",
        "paper-dim": "#E4E6F0",
        line: "#c7cbe0",
        // Brand accents drawn from fiber-optic fault-locator light (the
        // bright warm laser techs shine through a strand to find breaks),
        // not a generic tech-gradient. One cool note ("glass", the fiber
        // core itself) contrasts the two warm ones.
        signal: "#FF7A33",
        ember: "#D6294B",
        glass: "#2FB8B0",
        // Coverage-status colors — functional (map legend + markers), kept
        // separate from the brand accents above so "available"/"coming
        // soon" never doubles up with an interactive hover color.
        live: "#4B9B6E",
        amber: "#e9b93a",
        muted: "#5b5f78",
        body: "#33364f",
        // text on permanently-dark surfaces (hero, stat boxes, footer)
        // regardless of theme toggle — two weights for hierarchy
        "ink-muted": "#a9b0e0",
        "ink-soft": "#c4c8ea",
        // text/border for normally-light elements once dark mode is on
        "on-dark": "#e6e9ff",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },

      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
