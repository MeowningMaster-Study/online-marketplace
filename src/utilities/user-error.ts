export type UserError<T extends string = string> = {
	error: T
}

export function UserError<const T extends string>(error: T): UserError<T> {
	return { error }
}

export function isUserError(value: unknown): value is UserError {
	return typeof value === 'object' && value !== null && 'error' in value
}
