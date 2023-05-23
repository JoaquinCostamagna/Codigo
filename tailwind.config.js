/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  important: "#root",
  theme: {
    extend: {
      textColor: {
        skin: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
          headline: 'var(--text-headline)',
          paragraph: 'var(--text-paragraph)',
          paragraphMuted: 'var(--text-paragraph-muted)',
          link: 'var(--text-link)',
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          background: 'var(--bg-background)',
          card: 'var(--bg-card)',
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)'
        }
      }
    },
  },
  plugins: [],
}

