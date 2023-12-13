import { db, d } from '@/db'
import { eq } from 'drizzle-orm'
import { verify } from 'argon2'
import { Credentials } from './credentials'
import { sign } from 'jsonwebtoken'
import { TokenPayload } from './token-payload'
import { auth } from '@/utilities/auth'
import { env } from '@/utilities/env'
import { UserError } from '@/utilities/user-error'

export async function login({ login, password }: Credentials) {
	const user = await db.query.user.findFirst({
		where: eq(d.user.login, login),
	})

	if (!user) {
		return UserError('No user found')
	}

	const valid = await verify(user.passwordHash, password)
	if (!valid) {
		return UserError('Invalid password')
	}

	const payload: TokenPayload = { id: user.id }
	const token = sign(payload, env.JWT_SECRET)
	auth.set(payload)
	return payload
}
