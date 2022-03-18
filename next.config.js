/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	nextConfig,
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
	},
	images: {
		domains: ["cdn.shopify.com"],
	},
}
