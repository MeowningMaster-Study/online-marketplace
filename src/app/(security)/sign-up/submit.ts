'use server'

import { Credentials } from '@/logic/security/credentials'
import { signUp } from '@/logic/security/sign-up'
import { validate } from '@/utilities/validator'

export async function submit(data: unknown) {
	const crendentials = validate(data, Credentials)
	return await signUp(crendentials)
}
