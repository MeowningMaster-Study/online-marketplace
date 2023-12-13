export function formToObject<T = unknown>(data: FormData) {
	return Object.fromEntries(data.entries()) as T
}
