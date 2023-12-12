import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: varchar('username').notNull(),
	passwordHash: varchar('password_hash').notNull(),
})
