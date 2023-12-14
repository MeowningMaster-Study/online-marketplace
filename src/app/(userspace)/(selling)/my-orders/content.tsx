'use client'

import { useState } from 'react'
import { Flex } from '@mantine/core'
import type { getMyOrders } from '@/logic/order/get-my'
import { acceptOrder } from '@/logic/order/accept'
import { OrderCard } from './card'

type Props = {
	orders: Awaited<ReturnType<typeof getMyOrders>>
}

export function Content(props: Props) {
	const [orders, setOrders] = useState(props.orders)

	async function accept(id: number) {
		const order = orders.find((order) => order.id === id)
		if (!order) return
		await acceptOrder(id)
		order.status = 'accepted'
		setOrders([...orders])
	}

	if (orders.length === 0) {
		return 'No orders'
	}

	return (
		<Flex gap='sm' wrap='wrap'>
			{orders.map((order) => (
				<OrderCard key={order.id} order={order} accept={accept} />
			))}
		</Flex>
	)
}
