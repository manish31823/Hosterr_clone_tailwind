
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  _theme: {
    extend: {},
  },
  get theme() {
    return this._theme;
  },
  set theme(value) {
    this._theme = value;
  },
  plugins: [],
}
