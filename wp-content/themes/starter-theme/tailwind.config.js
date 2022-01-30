module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './views/*.twig',
      './views/**/*.twig',
      './svg/**/*.twig',
    ],
  },
  content: [],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}
