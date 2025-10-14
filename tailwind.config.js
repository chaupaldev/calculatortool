// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
  floatUp: {
    "0%": { transform: "translateY(0) scale(1)", opacity: 0.8 },
    "50%": { transform: "translateY(-50vh) scale(1.1)", opacity: 1 },
    "100%": { transform: "translateY(-100vh) scale(0.8)", opacity: 0 },
  },
},
animation: {
  floatUp: "floatUp linear infinite",
},

    },
  },
  plugins: [],
};
