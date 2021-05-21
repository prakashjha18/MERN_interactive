const colors = require('tailwindcss/colors')

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			current: "#00205B",
			...colors,
		},
		extend: {
		},
	},
	variants: {
		extend: {
			textColor: ["responsive", "hover", "focus", "group-hover"],
			borderWidth: ["responsive", "hover", "focus", "group-hover"],
		},
	},
	plugins: [],
};