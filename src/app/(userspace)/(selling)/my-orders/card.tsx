import type { getMyOrders } from '@/logic/order/get-my'
import { Card, Button, Text, Badge, Group, ListItem, List } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

type Props = {
	order: Awaited<ReturnType<typeof getMyOrders>>[number]
	accept: (id: number) => Promise<void>
}

export function OrderCard({ order, accept }: Props) {
	return (
		<Card style={{ minWidth: '200px', maxWidth: '350px' }}>
			<Group justify='space-between' mt='md' mb='xs'>
				<Text fw={500}>
					#{order.id}: {order.buyer.login}
				</Text>
				<Badge color={order.status === 'pending' ? 'pink' : 'green'}>
					{order.status}
				</Badge>
			</Group>
			<List>
				{order.content.map(({ orderId, nomenclature, count }) => (
					<ListItem key={orderId}>
						<Text size='sm'>
							{nomenclature.name}: {count} x{' '}
							{Number(nomenclature.price).toFixed(2)}₴ ={' '}
							{(count * Number(nomenclature.price)).toFixed(2)}₴
						</Text>
					</ListItem>
				))}
			</List>
			<div className='flex gap-2 justify-between items-center mt-4'>
				<Text fw={500}>
					Total:{' '}
					{order.content
						.reduce(
							(acc, { count, nomenclature }) =>
								acc + count * Number(nomenclature.price),
							0,
						)
						.toFixed(2)}
					₴
				</Text>
				<Button
					color='blue'
					radius='md'
					leftSection={<IconCheck />}
					onClick={() => accept(order.id)}
				>
					Accept
				</Button>
			</div>
		</Card>
	)
}