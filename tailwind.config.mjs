/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'etrr-blue': '#0072ce',
				'etrr-orange': '#ff8f00',
				'etrr-white': '#ffffff',
				'etrr-black': '#000000',
			},
		},
	},
	plugins: [],
}
