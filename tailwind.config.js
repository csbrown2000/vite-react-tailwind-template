const flowbite = require("flowbite-react/tailwind");

export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/**/**/*.{js,jsx,ts,tsx}",
		"./index.html",
		flowbite.content(),
	],
	theme: {},
	plugins: [flowbite.plugin()],
};
