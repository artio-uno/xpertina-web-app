/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            },
            colors: {
                'xpertina-blue': '#4353FF',
                'xpertina-green': '#23F95F',
                'xpertina-border': '#E3E7ED',
                'xpertina-label': '#424242'
            },
            boxShadow: {
                xpertina: '0px 20px 60px -10px rgba(67, 83, 255, 0.4);',
                'xpertina-hover': '0px 30px 60px -10px rgba(67, 83, 255, 0.6);'
            }
        }
    },
    plugins: []
};
