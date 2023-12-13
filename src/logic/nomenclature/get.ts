'use server'

import { db } from '@/db'
import { nomenclature } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getProduct(id: number) {
	const [product] = await db
		.select()
		.from(nomenclature)
		.where(eq(nomenclature.id, id))
	return product
}
