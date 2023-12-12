'use client'

import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Group, Text } from '@mantine/core'
import { PropsWithChildren } from 'react'
import IconApp from '@/assets/svg/icon.svg'

export function Shell({ children }: PropsWithChildren) {
	const [opened, { toggle }] = useDisclosure()

	return (
		<>
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
					<Group h='100%' px='md'>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom='sm'
							size='sm'
						/>
						<IconApp height={36} />
						<Text fz='lg'>Marketplace</Text>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar p='md'>Navbar</AppShell.Navbar>

				<AppShell.Main>{children}</AppShell.Main>
			</AppShell>
		</>
	)
}
