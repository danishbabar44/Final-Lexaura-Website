/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-indigo': '#020410',
        'deep-slate': '#0A0A0B',
        'electric-purple': '#6366f1',
        'electric-purple-bright': '#818cf8',
        'deep-indigo': '#312E81',
        'liquid-chrome': '#F8FAFC',
        'slate-grey': '#94A3B8',
        'ghost-white': '#F1F5F9',
        'pure-white': '#FFFFFF',
        'silver': '#E2E8F0',
      },
      backgroundImage: {
        'gradient-indigo': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%)',
      },
      fontFamily: {
        'clash': ['var(--font-jakarta)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
