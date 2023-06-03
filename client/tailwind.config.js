/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "15%": { transform: "translateX(-15px) scale(1.3)" },
                    "30%": { transform: "translateX(100px)" },
                    "45%": {
                        transform: "translateX(100px) translateY(100px)",
                    },
                    "60%": {
                        transform: "translateX(-100px) translateY(100px)",
                    },
                    "75%": { transform: "translateX(-100px) translateY(0px)" },
                    "90%": { transform: "translateX(5px)" },
                    "100%": { transform: "translateX(0px)" },
                },
            },
            animation: {
                wiggle: "wiggle 1.2s ease-in-out",
            },
        },
    },
    plugins: [],
};
