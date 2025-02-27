
// Import required modules
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode with the 'class' strategy
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: "#9333EA",
        secondary: "#6E29B7",
        teritary: "#4D38F0",
        bg: "#010a1f",
        cardbg: "#292738",
      },
      // Custom fonts
      fontFamily: {
        body: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
        heading: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      // Animation for scrolling effect
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      // Keyframes for scrolling effect
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors, // Custom plugin to add colors as CSS variables
  ],
};
// Plugin to add each Tailwind color as a global CSS variable, e.g., var(--gray-200)
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
