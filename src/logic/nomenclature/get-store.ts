'use server'

import { db, d } from '@/db'
import { auth } from '@/utilities/auth'
import { ne } from 'drizzle-orm'

export async function getStoreNomenclatures() {
	const user = auth.getOrThrow()
	const products = await db.query.nomenclature.findMany({
		with: {
			seller: true,
		},
		where: ne(d.nomenclature.userId, user.id),
	})
	return products
}
