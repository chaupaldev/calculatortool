/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        romantic: ["Dancing Script", "cursive"],
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: { "0%": { transform: "translateY(20px)" }, "100%": { transform: "translateY(0)" } },
        heartPulse: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.2)" } },
        floatUp: { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-200px)" } },
          heartPulse: {
      '0%,100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' },
    },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        heartPulse: "heartPulse 1s infinite",
        floatUp: "floatUp linear infinite",
            heartPulse: 'heartPulse 1s infinite',

      },
    },
  },
  plugins: [],
};
