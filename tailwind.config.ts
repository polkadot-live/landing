export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E6007A',
        'background-dark': '#121212',
        'background-light': '#FFFFFF',
        'light-border': '#E9ECEF',
        'surface-dark': '#1A1A1A',
        'surface-light': '#F8F9FA',
        'surface-elevated-light': '#F1F3F5',
        'text-main-light': '#1A1A1A',
        'text-muted-light': '#6C757D',
        'app-grey': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        'sm-nav': '920px',
        'sm-header': '1330px',
      },
    },
  },
  plugins: [
    // You can add your plugins here if needed
  ],
};
