/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'galaxy-100': '#030305', // Deepest black
                'galaxy-200': '#0a0a0f', // Main bg
                'galaxy-300': '#12121e', // Card bg
                'brand-primary': '#ccff00', // Electric Lime
                'brand-secondary': '#9eff00', // Light Lime
                'brand-accent': '#00ffcc', // Cyan/Green mix for gradients
                'text-primary': '#ffffff',
                'text-secondary': '#a0a0b0',
                'text-tertiary': '#606070',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
