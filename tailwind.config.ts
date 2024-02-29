import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "light-red": "hsl(356, 100%, 66%)",
          "very-light-red": "hsl(355, 100%, 74%)",
          "very-dark-blue": "hsl(208, 49%, 24%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "grayish-blue": "hsl(240, 2%, 79%)",
          "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
          "very-dark-black-blue": "hsl(240, 10%, 16%)",
        },
        gradient: {
          "very-light-red": "hsl(13, 100%, 72%)",
          "light-red": "hsl(353, 100%, 62%)",
        },
        "gradient-body": {
          "very-dark-gray-blue": "hsl(237, 17%, 21%)",
          "very-dark-dasaturated-blue": "hsl(237, 23%, 32%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
