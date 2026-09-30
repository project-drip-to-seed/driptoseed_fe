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
        "arrow-flow": {
          "0%": { backgroundPosition: "-60% 0, 0 0" },
          "16.6%": { backgroundPosition: "160% 0, 0 0" },
          "16.7%": { backgroundPosition: "300% 0, 0 0" },
          "99.9%": { backgroundPosition: "300% 0, 0 0" },
          "100%": { backgroundPosition: "-60% 0, 0 0" },
        },
        "num-pulse": {
          "0%": { backgroundColor: "#EED7FF", color: "#000000" },
          "2%": { backgroundColor: "#780AC1", color: "#FFFFFF" },
          "14%": { backgroundColor: "#780AC1", color: "#FFFFFF" },
          "18%": { backgroundColor: "#EED7FF", color: "#000000" },
          "100%": { backgroundColor: "#EED7FF", color: "#000000" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "bar-fill": {
          "0%": { transform: "scaleX(0)", opacity: "1" },
          "60%, 90%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "arrow-flow": "arrow-flow 6s linear infinite",
        "num-pulse": "num-pulse 6s linear infinite",
        float: "float 5s ease-in-out infinite",
        "bar-fill": "bar-fill 4.5s ease-out infinite",
      },
    },
  },
};

export default config;