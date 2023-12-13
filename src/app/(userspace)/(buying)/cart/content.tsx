'use client'

import { useCartStore } from '@/stores/cart'
import { useEffect, useState } from 'react'
import { ActionIcon, List, ListItem } from '@mantine/core'
import { IconTruckDelivery } from '@tabler/icons-react'
import { createOrder } from '@/logic/order/createOrder'

export function Content() {
	const cart = useCartStore()

	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	})

	async function checkout() {
		await createOrder(cart.entries)
		cart.clear()
	}

	return mounted && cart.entries.length > 0 ? (
		<>
			<List>
				{cart.entries.map((item) => (
					<ListItem key={item.productId}>
						{item.name}: {item.quantity} x {item.price.toFixed(2)} ={' '}
						{(item.quantity * item.price).toFixed(2)}
					</ListItem>
				))}
			</List>
			<ActionIcon className='fixed bottom-4 right-4' size={50}>
				<IconTruckDelivery
					style={{ width: '70%', height: '70%' }}
					onClick={checkout}
				/>
			</ActionIcon>
		</>
	) : (
		'No items here. Add something to you cart'
	)
}
