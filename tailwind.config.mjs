import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Courier Prime', ...defaultTheme.fontFamily.sans],
				text:['Oswald Variable', ...defaultTheme.fontFamily.sans],
			  },
		},
		animation: {
			"background-shine": "background-shine 2s linear infinite"
			  },
			  keyframes: {
			"background-shine": {
			  "from": {
				"backgroundPosition": "0 0"
			  },
			  "to": {
				"backgroundPosition": "-200% 0"
			  }
			}
		  }
	},
	plugins: [],
	
  
}
