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
                "infinite-scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                "infinite-scroll": "infinite-scroll 10s linear infinite",
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
