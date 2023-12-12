import { db, d } from '@/db'
import { eq } from 'drizzle-orm'
import { hash } from 'argon2'
import { Credentials } from './credentials'

export async function signUp({ login, password }: Credentials) {
	const user = await db.query.user.findFirst({
		where: eq(d.user.login, login),
	})
	if (user) {
		throw new Error('User already exists')
	}

	const passwordHash = await hash(password)

	await db.insert(d.user).values({
		login,
		passwordHash,
	})
}
