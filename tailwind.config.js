/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wave: {
          blue: "#007bff",
          light: "#3ba3ff",
          dark: "#005fcc",
        },
      },
      boxShadow: {
        card: "0 4px 10px rgba(0,0,0,0.08)",
      },
      keyframes: {
        // 🔹 Smooth vertical scan line animation
        scanLine: {
          "0%": { transform: "translateY(-70px)", opacity: "0.3" },
          "50%": { transform: "translateY(70px)", opacity: "1" },
          "100%": { transform: "translateY(-70px)", opacity: "0.3" },
        },
        // 🔹 Button click scale
        press: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        // 🔹 Fade and slide for page transitions
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scanLine: "scanLine 2s ease-in-out infinite",
        press: "press 0.2s ease",
        fadeSlide: "fadeSlide 0.4s ease",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
