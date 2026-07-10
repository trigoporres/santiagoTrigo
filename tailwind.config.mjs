/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: 'oklch(97% 0.02 35)',
                    100: 'oklch(94% 0.04 35)',
                    200: 'oklch(88% 0.08 35)',
                    300: 'oklch(80% 0.12 35)',
                    400: 'oklch(72% 0.17 35)',
                    500: 'oklch(62% 0.17 35)',
                    600: 'oklch(52% 0.17 35)',
                    700: 'oklch(42% 0.15 35)',
                    800: 'oklch(32% 0.12 35)',
                    900: 'oklch(22% 0.08 35)',
                },
                neutral: {
                    50: 'oklch(98% 0.005 90)',
                    100: 'oklch(96% 0.005 90)',
                    200: 'oklch(92% 0.005 90)',
                    300: 'oklch(86% 0.005 90)',
                    400: 'oklch(70% 0 0)',
                    500: 'oklch(55% 0 0)',
                    600: 'oklch(45% 0 0)',
                    700: 'oklch(38% 0 0)',
                    800: 'oklch(25% 0 0)',
                    900: 'oklch(18% 0 0)',
                    950: 'oklch(12% 0 0)',
                },
            },
            fontFamily: {
                sans: ['Public Sans', 'system-ui', 'sans-serif'],
                display: ['Public Sans', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
        },
    },
    plugins: [],
}
