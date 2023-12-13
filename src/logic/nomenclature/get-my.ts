'use server'

import { db, d } from '@/db'
import { auth } from '@/utilities/auth'
import { eq } from 'drizzle-orm'

export async function getMyNomenclatures() {
	const user = auth.getOrThrow()
	const products = await db.query.nomenclature.findMany({
		where: eq(d.nomenclature.userId, user.id),
	})
	return products
}
