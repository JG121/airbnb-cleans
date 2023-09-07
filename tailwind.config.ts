import type { Config } from 'tailwindcss'

const config: Config = {

  purge: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust this path to match your project structure
  _darkMode: false,
  get darkMode() {
    return this._darkMode
  },
  set darkMode(value) {
    this._darkMode = value
  },

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
