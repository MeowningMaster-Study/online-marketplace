'use server'

import { d, db } from '@/db'
import { auth } from '@/utilities/auth'
import { eq, sql } from 'drizzle-orm'

export async function getOrdersByStatus() {
	const user = auth.getOrThrow()

	const result = await db
		.select({
			status: d.order.status,
			count: sql<number>`count(${d.order})`,
		})
		.from(d.order)
		.where(eq(d.order.sellerId, user.id))
		.groupBy(d.order.status)

	return result
}
