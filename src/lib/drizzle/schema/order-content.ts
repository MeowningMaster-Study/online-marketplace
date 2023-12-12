import { bigint, integer, pgTable, primaryKey } from 'drizzle-orm/pg-core'
import { nomenclature } from './nomenclature'
import { order } from './order'

export const orderContent = pgTable(
	'order_content',
	{
		orderId: bigint('order_id', { mode: 'number' })
			.notNull()
			.references(() => order.id),
		nomenclatureId: bigint('nomenclature_id', { mode: 'number' })
			.notNull()
			.references(() => nomenclature.id),
		count: integer('count').notNull(),
	},
	(tb) => ({
		pk: primaryKey(tb.orderId, tb.nomenclatureId),
	}),
)
