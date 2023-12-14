'use client'

import { useState } from 'react'
import { ActionIcon, Grid, GridCol } from '@mantine/core'
import type { getMyOrders } from '@/logic/order/get-my'
import { acceptOrder } from '@/logic/order/accept'
import { ProductCard } from '@/components/product/card'
import { remove } from 'lodash'
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
		<Grid>
			{orders.map((order) => (
				<GridCol key={order.id} span='auto'>
					<OrderCard order={order} accept={accept} />
				</GridCol>
			))}
		</Grid>
	)
}