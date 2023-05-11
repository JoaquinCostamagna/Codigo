/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  important: "#root",
  theme: {
    extend: {
      textColor: {
        skin: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)'
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)'
        }
      }
    },
  },
  plugins: [],
}

