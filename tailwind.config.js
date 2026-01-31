/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'luxury-black': '#1a1a1a',
                'luxury-white': '#f9f9f9',
                'luxury-beige': '#eaddcf',
                'luxury-gold': '#d4af37',
            },
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
