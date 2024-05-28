const flowbite = require("flowbite-react/tailwind");

export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/**/**/*.{js,jsx,ts,tsx}",
		"./index.html",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
		flowbite.content(),
	],
	theme: {},
	presets: [require("@relume_io/relume-tailwind")],
	plugins: [flowbite.plugin()],
};
