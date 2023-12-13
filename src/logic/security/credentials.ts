import { Static, Type } from '@sinclair/typebox'

export type Credentials = Static<typeof Credentials>
export const Credentials = Type.Object({
	login: Type.String(),
	password: Type.String(),
})
