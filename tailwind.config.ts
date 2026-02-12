import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "background-light": "#f9f8f4",
        "background-dark": "#0a0a0a",
        "surface-light": "#FFFFFF",
        "surface-dark": "#141414",
        "accent-gold": "#C5A059",
        "text-light": "#262626",
        "text-dark": "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["Avone", "GFS Didot", "serif"],
        display: ["Avone", "serif"],
        elegant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
