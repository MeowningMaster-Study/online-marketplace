'use server'

import { Credentials } from '@/logic/security/credentials'
import { login } from '@/logic/security/login'
import { validate } from '@/utilities/validator'

export async function submit(data: unknown) {
	const crendentials = validate(data, Credentials)
	return await login(crendentials)
}
