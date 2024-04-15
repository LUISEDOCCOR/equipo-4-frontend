/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cOrange: "#ff6464",
				cGrey: "#696d85"
			}
		},
	},
	plugins: [require("daisyui")],
	themes: ["light"],

};
