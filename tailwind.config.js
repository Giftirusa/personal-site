/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fc5ebf",
          yellow: "#FCC05E",
          maroon: '#F42177',
          green: '#18D680',
        },
        dark: {
          DEFAULT: '#fc5ebf',
          tint: '#1C2125',
          faded: '#22272C',
          dim: '#0B0C0C',
          text: '#344054',
        },
        light: {
          DEFAULT: '#FFFFFF',
          gray: '#D0D5DD',
        },
        border: 'rgba(255, 255, 255, 0.15)',
        success: {
          DEFAULT: '#fc5ebf',
          subtle: '#DCFAE6',
        },
      }
    },
    scale: {
      '115': '1.15',
      '120': '1.2',
    }
  },
  plugins: [],
}

