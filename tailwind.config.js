/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: '#241C2B',
                paper: '#F7F5F2',
                odoo: {
                    50: '#F4EEF3',
                    100: '#E6DAE3',
                    300: '#A87E9E',
                    500: '#714B67',
                    600: '#5D3D55',
                    700: '#4A3044',
                },
                teal: {
                    100: '#D6ECED',
                    500: '#017E84',
                    600: '#01686D',
                },
                line: '#E4DFE4',
            },
            fontFamily: {
                display: ['Sora', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
        },
    },
    plugins: [],
}
