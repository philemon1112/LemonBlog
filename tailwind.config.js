/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 100s linear infinite",
        marquee2: 'marquee2 100s linear infinite',
        marquee3: 'marquee3 96s linear infinite'
      },
      keyframes: {
        marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 1rem)/2))" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
