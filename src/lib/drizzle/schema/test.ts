import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const test = pgTable('test', {
	id: serial('id').primaryKey(),
	text: text('text').notNull(),
})
