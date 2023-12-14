import './globals.css'
import '@mantine/core/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/notifications/styles.css'

import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '@/components/mantine/theme'
import { NavigationProgress } from '@mantine/nprogress'
import { Notifications } from '@mantine/notifications'

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
				<MantineProvider theme={theme} defaultColorScheme='auto'>
					<NavigationProgress />
					<Notifications />
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}
