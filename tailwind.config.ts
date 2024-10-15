import type { Config } from "tailwindcss";

const fonts = [
  "interLight",
  "pretendard",
  "pretendardLight",
  "pretendardSemibold",
  "pretendardExtrabold",
  "outfit",
  "outfitLight",
  "outfitSemibold",
  "outfitExtrabold",
  "inter"
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: Object.fromEntries(
        fonts.map((font) => [font, [`var(--font-${font})`]])
      ),
    },
  },
  plugins: [],
};

export default config;