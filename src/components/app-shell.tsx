'use client'

import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger } from '@mantine/core'
import { PropsWithChildren } from 'react'

export function MyAppShell({ children }: PropsWithChildren) {
	const [opened, { toggle }] = useDisclosure()

	return (
		<>
			Hello
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				padding='md'
			>
				<AppShell.Header>
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
					<div>Logo</div>
				</AppShell.Header>

				<AppShell.Navbar p='md'>Navbar</AppShell.Navbar>

				<AppShell.Main>{children}</AppShell.Main>
			</AppShell>
		</>
	)
}
