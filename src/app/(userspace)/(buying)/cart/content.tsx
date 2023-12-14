'use client'

import { useCartStore } from '@/stores/cart'
import { useEffect, useState } from 'react'
import { ActionIcon, Button, List, ListItem } from '@mantine/core'
import { IconTruckDelivery } from '@tabler/icons-react'
import { createOrder } from '@/logic/order/create'

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

	const total = cart.entries
		.reduce((acc, { price, quantity }) => acc + quantity * Number(price), 0)
		.toFixed(2)

	return mounted && cart.entries.length > 0 ? (
		<>
			<List>
				{cart.entries.map((item) => (
					<ListItem key={item.productId}>
						{item.name}: {item.quantity} x {item.price.toFixed(2)}₴ ={' '}
						{(item.quantity * item.price).toFixed(2)}₴
					</ListItem>
				))}
			</List>
			<Button
				className='fixed bottom-4 right-4'
				onClick={checkout}
				leftSection={<IconTruckDelivery />}
				size='lg'
			>
				Checkout {total}₴
			</Button>
		</>
	) : (
		'No items here. Add something to you cart'
	)
}
