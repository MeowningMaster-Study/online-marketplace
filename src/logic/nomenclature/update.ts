'use server'

import { db } from '@/db'
import { nomenclature } from '@/db/schema'
import { auth } from '@/utilities/auth'
import { eq } from 'drizzle-orm'

export type ProductUpdate = {
	name: string
	description: string
	category: string
	price: number
}

export async function updateProduct(id: number, product: ProductUpdate) {
	const user = auth.getOrThrow()
	await db
		.update(nomenclature)
		.set({
			...product,
			userId: user.id,
			price: product.price.toFixed(2),
		})
		.where(eq(nomenclature.id, id))
}
