import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "5rem",
      },
      fontSize: {
        h1: ["clamp(2rem, 3vw, 3.25rem)", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["clamp(1.625rem, 2.2vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 1.8vw, 1.75rem)", { lineHeight: "1.3", fontWeight: "600" }],
      },
      colors: {
        brand: {
          DEFAULT: "#0f5fff",
          dark: "#0a3db0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
