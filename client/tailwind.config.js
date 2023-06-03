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
                toast: {
                    "0%": { transform: "translateY(-100px)" },
                    "10%": { transform: "translateY(30px)" },
                    "20%": {
                        transform: "translateY(0px)",
                    },
                    "30%": {
                        transform: "translateY(0px)",
                    },
                    "40%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(0px)",
                    },
                    "60%": {
                        transform: "translateY(0px)",
                    },
                    "70%": {
                        transform: "translateY(0px)",
                    },
                    "80%": {
                        transform: "translateY(0px)",
                    },
                    "90%": {
                        transform: "translateY(0px)",
                    },
                    "100%": {
                        transform: "translateY(-100px)",
                    },
                },
            },
            animation: {
                wiggle: "wiggle 1.2s ease-in-out",
                toast: "toast 3.1s ease-in-out",
            },
        },
    },
    plugins: [],
};
