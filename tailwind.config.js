/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A47',
          dark: '#00152C',
          light: '#1E3A5F',
          muted: '#7A92B4',
        },
        brand: {
          DEFAULT: '#F58220',
          hover: '#E06D12',
          soft: '#FFF3E8',
        },
        canvas: '#F8FAFC',
        slate2: '#F1F5F9',
        line: '#E2E8F0',
        line2: '#CBD5E1',
        ink: '#111C2D',
        sub: '#43474D',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        level1: '0 1px 3px 0 rgba(15,42,71,0.05), 0 1px 2px -1px rgba(15,42,71,0.05)',
        level2: '0 10px 15px -3px rgba(15,42,71,0.08), 0 4px 6px -4px rgba(15,42,71,0.04)',
        level3: '0 20px 25px -5px rgba(15,42,71,0.12), 0 8px 10px -6px rgba(15,42,71,0.08)',
      },
      maxWidth: {
        matrial: '1320px',
      },
    },
  },
  plugins: [],
}
