const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const nextConfig = {
	webpack: (config, options) => {
		return config
	},
	eslint: {
		// ESLint managed on the workspace level
		ignoreDuringBuilds: true,
	},
	images: {
		disableStaticImages: true,
	},
}
const config = withPlugins([
	[
		optimizedImages,
		{
			optimizeImages: true,
		},
	],
	nextConfig,
])
module.exports = config
