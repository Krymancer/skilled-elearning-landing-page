import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'Plus Jakarta Sans'
      },
      colors: {
        'light-purple': '#666CA3',
        'dark-purple': '#13183F',
        'gray': '#83869A',
        'dark-pink': '#F74780',
        'light-pink': '#FFA7C3',
        'white': '#FFFFFF',
        'gradient-1-1': '#F02AA6',
        'gradient-1-2': '#FF6F48',
        'gradient-2-1': '#4851FF',
        'gradient-2-2': '#F02AA6',
      }
    },
  },
  plugins: [],
}
export default config
