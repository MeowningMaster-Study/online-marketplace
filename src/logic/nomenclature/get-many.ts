'use server'

import { getProduct } from './get'

export async function getProducts(ids: number[]) {
	return await Promise.all(ids.map((id) => getProduct(id)))
}
