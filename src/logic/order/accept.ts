'use server'

import { db, d } from '@/db'
import { eq } from 'drizzle-orm'

export async function acceptOrder(id: number) {
	await db
		.update(d.order)
		.set({ status: 'accepted', updatedAt: new Date() })
		.where(eq(d.order.id, id))
}
