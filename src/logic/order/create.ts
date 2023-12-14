'use server'

import { db } from '@/db'
import { order, orderContent } from '@/db/schema'
import { CartEntries } from '@/stores/cart'
import { auth } from '@/utilities/auth'
import { groupBy } from 'lodash'

type OrderInsert = typeof order.$inferInsert
type OrderContentInsert = typeof orderContent.$inferInsert

export async function createOrder(entries: CartEntries) {
	const user = auth.getOrThrow()
	const groupByShop = groupBy(entries, 'sellerId')

	db.transaction(async (tx) => {
		const ordersValues = Object.keys(groupByShop).map(
			(sellerId): OrderInsert => ({
				sellerId: Number(sellerId),
				customerId: user.id,
				status: 'pending',
				createdAt: new Date(),
				updatedAt: new Date(),
			}),
		)

		const orders = await tx.insert(order).values(ordersValues).returning({
			id: order.id,
		})

		const ordersContentValues = Object.values(groupByShop).flatMap(
			(items, index) => {
				return items.map(
					(item): OrderContentInsert => ({
						orderId: orders[index].id,
						count: item.quantity,
						nomenclatureId: item.productId,
					}),
				)
			},
		)

		await tx.insert(orderContent).values(ordersContentValues)
	})
}
