'use client'

import { useDisclosure } from '@mantine/hooks'
import {
	AppShell,
	Burger,
	Divider,
	Group,
	NavLink,
	ScrollArea,
	Text,
} from '@mantine/core'
import { PropsWithChildren } from 'react'
import IconApp from '@/assets/svg/icon.svg'
import {
	IconBuildingStore,
	IconBuildingWarehouse,
	IconLogout,
	IconReportAnalytics,
	IconShoppingCart,
	IconTruckDelivery,
} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { auth } from '@/utilities/auth'

export function Shell({ children }: PropsWithChildren) {
	const [opened, { toggle }] = useDisclosure()

	const router = useRouter()
	function logOut() {
		auth.remove()
		router.push('/login')
	}

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 200,
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

				<AppShell.Navbar p='md'>
					<AppShell.Section grow component={ScrollArea}>
						<Divider label='Buying' labelPosition='left' />
						<NavLink
							label='Store'
							href='/'
							leftSection={<IconBuildingStore />}
						/>
						<NavLink
							label='Cart'
							href='/cart'
							leftSection={<IconShoppingCart />}
						/>
						<Divider label='Selling' labelPosition='left' />
						<NavLink
							label='My products'
							href='/my-products'
							leftSection={<IconBuildingWarehouse />}
						/>
						<NavLink
							label='My orders'
							href='/my-orders'
							leftSection={<IconTruckDelivery />}
						/>
						<NavLink
							label='Analytics'
							href='/analytics'
							leftSection={<IconReportAnalytics />}
						/>
					</AppShell.Section>
					<AppShell.Section>
						<NavLink
							label='Log out'
							onClick={logOut}
							leftSection={<IconLogout />}
						/>
					</AppShell.Section>
				</AppShell.Navbar>

				<AppShell.Main>{children}</AppShell.Main>
			</AppShell>
		</>
	)
}
