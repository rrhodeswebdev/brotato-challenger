/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'brotato.wiki.spellsandguns.com',
			},
		],
	},
};

module.exports = nextConfig;
