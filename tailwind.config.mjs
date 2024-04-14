/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'sh700': {'raw' : '(max-height: 700px)'},
			'sh540': {'raw' : '(max-height: 540px)'},
		}
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/typography")
	],
	daisyui: {
		themes: ["lemonade", "luxury"],
	}
}
