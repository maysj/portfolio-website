module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Add your component files here
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kosugi: ['Kosugi Maru', 'sans-serif'],
        gabarito: ['Gabarito', 'cursive'],
        libre: ['Libre Baskerville', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
