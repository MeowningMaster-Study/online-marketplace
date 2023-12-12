import {
	bigint,
	numeric,
	pgTable,
	serial,
	text,
	varchar,
} from 'drizzle-orm/pg-core'
import { user } from './user'

export const nomenclature = pgTable('nomenclature', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	description: text('description').notNull(),
	category: varchar('category').notNull(),
	price: numeric('price', { precision: 19, scale: 4 }).notNull(),
	userId: bigint('user_id', { mode: 'number' })
		.notNull()
		.references(() => user.id),
})
