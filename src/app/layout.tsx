// import { Inter } from 'next/font/google'
import '@mantine/core/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/components/mantine/theme'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Online Marketplace',
	description: 'Place to buy and sell stuff',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider theme={theme}>{children}</MantineProvider>
			</body>
		</html>
	)
}
