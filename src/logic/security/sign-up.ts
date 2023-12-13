import { db, d } from '@/db'
import { eq } from 'drizzle-orm'
import { hash } from 'argon2'
import { Credentials } from './credentials'
import { TokenPayload } from './token-payload'
import { sign } from 'jsonwebtoken'
import { env } from '@/utilities/env'
import { auth } from '@/utilities/auth'
import { UserError } from '@/utilities/user-error'

export async function signUp({ login, password }: Credentials) {
	const existingUser = await db.query.user.findFirst({
		where: eq(d.user.login, login),
	})
	if (existingUser) {
		return UserError('User already exists')
	}

	const passwordHash = await hash(password)

	const [user] = await db
		.insert(d.user)
		.values({
			login,
			passwordHash,
		})
		.returning({ id: d.user.id })

	const payload: TokenPayload = { id: user.id }
	const token = sign(payload, env.JWT_SECRET)
	auth.set(token)
	return { id: user.id }
}
