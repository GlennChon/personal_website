const nextConfig = {
	reactStrictMode: true,
	basePath: '',
	env: {
		EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
		EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
		EMAIL_USER_ID: process.env.EMAIL_USER_ID,
	},
}

module.exports = nextConfig
