module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // daisyui: {
    //   themes: ['corporate'],
    // },
    colors: {
      primary: '#1E5EF3',
      secondary: '#F6F6F6',
      text: '#161616',
    },
    fontFamily: {
      primary: ['HK Grotesk', 'sans-serif'],
      secondary: ['Inter', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
