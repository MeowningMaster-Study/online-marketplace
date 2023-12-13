import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { nomenclature } from './nomenclature'

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	login: varchar('username').notNull(),
	passwordHash: varchar('password_hash').notNull(),
})

export const usersRelations = relations(user, ({ many }) => ({
	nomenclatures: many(nomenclature),
}))
