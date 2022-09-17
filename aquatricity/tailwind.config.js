module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22577A",
          secondary: "#38A3A5",
          accent: "#57CC99",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-100": "#FAFAFA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
