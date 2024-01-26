const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            backgroundImage: {
                paint: "url('/pawel-czerwinski-OG44d93iNJk-unsplash.png')",
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
