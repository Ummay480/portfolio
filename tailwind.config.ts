import type { Config } from "tailwindcss"; 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonRed: '#ff073a',
        neonYellow: '#f5ff7f',
      },
      animation: {
        neonGlow: 'neonGlow 1.5s ease-in-out infinite',
      },
      keyframes: {
        neonGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 8px #ff073a, 0 0 15px #f5ff7f, 0 0 30px rgba(255, 255, 0, 0.6)',
          },
          '50%': { 
            boxShadow: '0 0 15px #ff073a, 0 0 25px #f5ff7f, 0 0 40px rgba(255, 255, 0, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
