/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btn: '0px 10px 15px rgba(1, 115, 153, 0.2)',
      },
      fontSize: {
        sm: '0.75rem', // 12px
        base: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '1.75rem', // 28px
        '3xl': '2.25rem', // 36px
        '4xl': '3rem', // 48px
        '5xl': '4rem', // 64px
      },
      colors: {
        color: {
          500: '#e5e5e5',
          600: '#949494',
          700: '#242527',
          800: '#2b2b2b',
        }
      }
    },
  },
  plugins: [],
};
