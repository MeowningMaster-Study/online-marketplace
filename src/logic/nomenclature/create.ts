'use server'

import { db } from '@/db'
import { nomenclature } from '@/db/schema'
import { auth } from '@/utilities/auth'

export type ProductCreate = {
	name: string
	description: string
	category: string
	price: number
}

export async function createProduct(product: ProductCreate) {
	const user = auth.getOrThrow()
	await db.insert(nomenclature).values({
		...product,
		userId: user.id,
		price: product.price.toFixed(2),
	})
}
