import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        kugile: ["Kugile", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "stat-pulse": {
          "0%": { color: "#D59EFB" },
          "3%": { color: "#780AC1" },
          "10%": { color: "#780AC1" },
          "17%": { color: "#D59EFB" },
          "100%": { color: "#D59EFB" },
        },
        "arrow-flow": {
          "0%": { backgroundPosition: "-60% 0, 0 0" },
          "16.6%": { backgroundPosition: "160% 0, 0 0" },
          "16.7%": { backgroundPosition: "300% 0, 0 0" },
          "99.9%": { backgroundPosition: "300% 0, 0 0" },
          "100%": { backgroundPosition: "-60% 0, 0 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "stat-pulse": "stat-pulse 9s ease-in-out infinite",
        "arrow-flow": "arrow-flow 6s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
};

export default config;