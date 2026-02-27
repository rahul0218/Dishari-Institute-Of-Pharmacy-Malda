import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#228B22',
        'brand-primary-dark': '#15803D',
        'brand-primary-light': '#F7FDF7',
        'brand-text-main': '#111827',
        'brand-text-content': '#374151',
        'brand-text-muted': '#4B5563',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-1': "url('/image/dishari_building.png')",
        'hero-2': "url('/image/dishari_building.png')",
      }
    },
  },
  plugins: [
    typography,
  ],
}
