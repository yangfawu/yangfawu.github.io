const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                paint: "url('/pawel-czerwinski-OG44d93iNJk-unsplash.png')",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-15deg)" },
                    "50%": { transform: "rotate(15deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
