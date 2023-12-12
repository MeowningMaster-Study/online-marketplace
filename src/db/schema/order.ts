import {
	bigint,
	pgTable,
	serial,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'
import { user } from './user'

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
