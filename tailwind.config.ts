import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { sm: "320px", md: "768px", base: "1280px" },
      colors: {
        yellow: "#FFC107",
        white: "#FDF7F2",
        black: "#111111",
        blue: "#54ADFF",
        blueLight: "#CCE4FB",
        green: "#00C3AD",
        red: "#F43F5E",
      },
      dropShadow: {
        sm: "3px 8px 14px rgba(136, 198, 253, 0.19)",
        md: "7px 13px 14px rgba(116, 177, 232, 0.24)",
      },
      backgroundImage: {
        grBlue: "linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%)",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "26px",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
