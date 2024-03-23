/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        toLeft: "scrollX 20s linear infinite",
        toRignt: "scrollX 20s linear infinite reverse",
      },
      keyframes: {
        scrollX: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
