import { getSalesByCategory } from '@/logic/analytics/sales-by-category'
import { Content } from './content'
import { getSalesByBuyer } from '@/logic/analytics/sales-by-buyer'
import { getSalesByProduct } from '@/logic/analytics/sales-by-product'
import { getOrdersByStatus } from '@/logic/analytics/orders-by-status'

export default async function Page() {
	const salesByCategory = await getSalesByCategory()
	const salesByBuyer = await getSalesByBuyer()
	const salesByProduct = await getSalesByProduct()
	const ordersByStatus = await getOrdersByStatus()
	return (
		<Content
			salesByCategory={salesByCategory}
			salesByBuyer={salesByBuyer}
			salesByProduct={salesByProduct}
			ordersByStatus={ordersByStatus}
		/>
	)
}
