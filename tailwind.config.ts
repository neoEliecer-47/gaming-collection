import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
     function(api: PluginAPI) {
      const { addUtilities } = api
      addUtilities({
        '.text-border-white': {
          '-webkit-text-stroke': '1px white',
        }
      })
    }
    
  ],
};
export default config;
