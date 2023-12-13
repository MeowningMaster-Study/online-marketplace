import { Type } from '@sinclair/typebox'
import { validate } from './validator'

export const Env = Type.Object({
	JWT_SECRET: Type.String(),
})

export const env = validate(process.env, Env)
