import './globals.css'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/components/mantine/theme'

export const metadata: Metadata = {
	title: 'Marketplace',
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
