// tailwind.config.js
module.exports = {
  future: {},
  purge: [
      "index.html"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
