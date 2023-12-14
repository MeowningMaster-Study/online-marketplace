import { d, db } from '@/db'
import { auth } from '@/utilities/auth'

export function getSalesByCategory() {
	const user = auth.getOrThrow()

	// db.select().from(d.order).innerJoin(d.orderContent, )
}
