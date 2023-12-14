'use server'

import { db, d } from '@/db'
import { auth } from '@/utilities/auth'
import { eq } from 'drizzle-orm'

export async function getMyOrders() {
	const user = auth.getOrThrow()
	const orders = await db.query.order.findMany({
		with: {
			buyer: {
				columns: {
					id: true,
					login: true,
				},
			},
			content: {
				with: {
					nomenclature: true,
				},
			},
		},
		where: eq(d.order.sellerId, user.id),
	})
	return orders
}
