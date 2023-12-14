'use server'

import { d, db } from '@/db'
import { auth } from '@/utilities/auth'
import { and, eq, sql } from 'drizzle-orm'

export async function getSalesByBuyer() {
	const user = auth.getOrThrow()

	const result = await db
		.select({
			user: d.user.login,
			sum: sql<number>`sum(${d.orderContent.count} * ${d.nomenclature.price})`,
		})
		.from(d.order)
		.innerJoin(d.orderContent, eq(d.order.id, d.orderContent.orderId))
		.innerJoin(
			d.nomenclature,
			eq(d.orderContent.nomenclatureId, d.nomenclature.id),
		)
		.innerJoin(d.user, eq(d.order.customerId, d.user.id))
		.where(and(eq(d.order.sellerId, user.id), eq(d.order.status, 'accepted')))
		.groupBy(d.user.id)

	return result
}
