import { db, d } from '@/db'
import { eq } from 'drizzle-orm'
import { verify } from 'argon2'
import { Credentials } from './credentials'

export async function signIn({ login, password }: Credentials) {
	const user = await db.query.user.findFirst({
		where: eq(d.user.login, login),
	})

	if (!user) {
		throw new Error('No user found')
	}

	const valid = await verify(user.passwordHash, password)
	if (!valid) {
		throw new Error('Invalid password')
	}

	return user
}
