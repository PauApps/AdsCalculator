/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#2563eb', // Brand Blue (Hardcoded for production reliability)
                foreground: '#ffffff',
            },
        },
        fontFamily: {
            sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
