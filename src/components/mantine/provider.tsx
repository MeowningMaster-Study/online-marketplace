import '@mantine/core/styles.css'
import '@mantine/nprogress/styles.css'
import '@mantine/notifications/styles.css'

import { PropsWithChildren } from 'react'
import { theme } from './theme'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'

export function MyMantineProvider({ children }: PropsWithChildren) {
	return (
		<MantineProvider theme={theme}>
			<NavigationProgress />
			<Notifications />
			{children}
		</MantineProvider>
	)
}
