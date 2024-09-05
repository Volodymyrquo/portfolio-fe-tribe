import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1200px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '2rem',
            },
        },
        extend: {
            fontFamily: {
                sans: 'var(--font-sans)',
                serif: 'var(--font-serif)',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('hover', [
                '@media(hover:hover){&:hover}',
                '@media(hover:none){&:active}',
            ]);
        }),
    ],
};
export default config;
