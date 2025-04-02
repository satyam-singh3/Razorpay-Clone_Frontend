module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
npx tailwindcss -i ./src/input.css -o ./dist/styles.css --minify

