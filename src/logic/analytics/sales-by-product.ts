'use server'

import { d, db } from '@/db'
import { auth } from '@/utilities/auth'
import { and, eq, sql } from 'drizzle-orm'

export async function getSalesByProduct() {
	const user = auth.getOrThrow()

	const result = await db
		.select({
			nomenclature: d.nomenclature.name,
			sum: sql<number>`sum(${d.orderContent.count} * ${d.nomenclature.price})`,
		})
		.from(d.order)
		.innerJoin(d.orderContent, eq(d.order.id, d.orderContent.orderId))
		.innerJoin(
			d.nomenclature,
			eq(d.orderContent.nomenclatureId, d.nomenclature.id),
		)
		.where(and(eq(d.order.sellerId, user.id), eq(d.order.status, 'accepted')))
		.groupBy(d.nomenclature.id)

	return result
}
