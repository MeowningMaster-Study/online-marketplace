import { getMyOrders } from '@/logic/order/get-my'
import { Content } from './content'

export default async function Page() {
	const orders = await getMyOrders()

	return (
		<>
			<Content orders={orders} />
		</>
	)
}
