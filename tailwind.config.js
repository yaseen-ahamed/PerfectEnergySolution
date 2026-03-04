/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F1B2D',
        secondary: '#1E4DB7',
        accent: '#0FA958',
        background: '#F5F7FA',
        surface: '#FFFFFF',
        textDark: '#111827',
        borderGrey: '#E5E7EB',
        dark: {
          bg: '#0B1220',
          surface: '#111827',
          text: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' }
        }
      }
    },
  },
  plugins: [],
}
