import { cookies } from './cookies'

/**
 * JWT token
 */
type AuthData = string

const cookieName = 'auth'

export const auth = {
	set(data: AuthData) {
		cookies.set(cookieName, JSON.stringify(data))
	},
	get(): AuthData | undefined {
		const data = cookies.get(cookieName)
		if (!data) return undefined
		return JSON.parse(data)
	},
	getOrThrow(): AuthData {
		const data = this.get()
		if (!data) throw new Error('No auth data found')
		return data
	},
	remove() {
		cookies.remove(cookieName)
	},
}
