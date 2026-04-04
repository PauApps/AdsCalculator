/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: 'var(--primary)',
                foreground: 'var(--primary-foreground)',
            },
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
