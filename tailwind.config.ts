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
      'primary-blue': '#106Eb0',
      'primary-orange': '#EC7000',
      'primary-gray': '#33303E',
      'second-gray': '#4E4859',
      'gray-phone': '#F4F4F4',
      'txt-gray': '#7A7786',
      'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      }
    },
      backgroundImage: {
       'img_bg_hero': "url('../assets/bg-hero.jpg')",
      },
    
  },
  plugins: [],
};
export default config;
