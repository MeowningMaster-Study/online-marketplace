'use server'

import { d, db } from '@/db'
import { eq } from 'drizzle-orm'

export async function removeProduct(id: number) {
	await db.delete(d.nomenclature).where(eq(d.nomenclature.id, id))
}
