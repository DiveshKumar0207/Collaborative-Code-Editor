import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "Frank Ruhl Libre": ["Frank Ruhl Libre", "sans-serif"],
      },
      screens: {
        "md-max": { max: "720px" },
      },

      colors: {
        backgroundColor: {
          dark: "#121212",
          "dark-secondary": "#212121",
          light: "#ffffff",
        },

        textColor: {
          high: "rgba(255, 255, 255, 0.87)",
          medium: "rgba(255, 255, 255, 0.6)",
          disabled: "rgba(255, 255, 255, 0.38)",
        },

        overlayDarkColors: {
          dp00: "rgba(255, 255, 255, 0)",
          dp01: "rgba(255, 255, 255, 0.05)",
          dp02: "rgba(255, 255, 255, 0.07)",
          dp03: "rgba(255, 255, 255, 0.08)",
          dp04: "rgba(255, 255, 255, 0.09)",
          dp06: "rgba(255, 255, 255, 0.11)",
          dp08: "rgba(255, 255, 255, 0.12)",
          dp12: "rgba(255, 255, 255, 0.14)",
          dp16: "rgba(255, 255, 255, 0.15)",
          dp24: "rgba(255, 255, 255, 0.16)",
        },

        errorColor: {
          light: "#B00020",
          dark: "#cf6679",
        },

        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
});
