import './globals.css'

import type { Metadata } from 'next'
import { ColorSchemeScript } from '@mantine/core'
import { MyMantineProvider } from '@/components/mantine/provider'

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
				<MyMantineProvider>{children}</MyMantineProvider>
			</body>
		</html>
	)
}
