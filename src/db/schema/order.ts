import {
	bigint,
	pgTable,
	serial,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'
import { user } from './user'
import { relations } from 'drizzle-orm'
import { orderContent } from '.'

export const order = pgTable('order', {
	id: serial('id').primaryKey(),
	status: varchar('status').notNull(),
	sellerId: bigint('seller_id', { mode: 'number' })
		.notNull()
		.references(() => user.id),
	customerId: bigint('customer_id', { mode: 'number' })
		.notNull()
		.references(() => user.id),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull(),
})

export const orderRelations = relations(order, ({ one, many }) => ({
	content: many(orderContent),
	seller: one(user, { fields: [order.sellerId], references: [user.id] }),
	buyer: one(user, { fields: [order.customerId], references: [user.id] }),
}))
