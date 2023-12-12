/** @type {import('next').NextConfig} */
export default {
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
		ppr: true,
	},
}
