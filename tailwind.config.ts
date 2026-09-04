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
        violet: "#5B3B9E",
        blue: "#2F79D6",
        magenta: "#D8207C",
        cyan: "#26C7D9",
        muted: "#5b5f78",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #2F79D6, #5B3B9E 55%, #D8207C)",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
