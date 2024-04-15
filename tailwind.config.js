/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cOrange: "#ff6464",
				cGrey: "#545974",
				cLightGrey: "#bababa"
			}
		},
	},
	plugins: [require("daisyui")],
	themes: ["light"],

};
