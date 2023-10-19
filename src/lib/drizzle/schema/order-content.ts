import { pgTable, bigint, integer, primaryKey } from 'drizzle-orm/pg-core'
import { order } from './order'
import { nomenclature } from './nomenclature'

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
