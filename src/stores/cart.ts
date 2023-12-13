'use client'

import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

type Entry = {
	productId: number
	sellerId: number
	name: string
	quantity: number
	price: number
}

export type CartEntries = Entry[]

type CartState = {
	entries: CartEntries
	add: (entry: Entry) => void
	remove: (productId: number) => void
	clear: () => void
}

export const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set) => ({
				entries: [],
				add: (entry) => {
					set((state) => {
						const exisiting = state.entries.find(
							(e) => e.productId === entry.productId,
						)
						if (exisiting) {
							exisiting.quantity += entry.quantity
							return {
								entries: [...state.entries],
							}
						}

						return {
							entries: [...state.entries, entry],
						}
					})
				},
				remove: (productId) => {
					set((state) => ({
						entries: state.entries.filter(
							(entry) => entry.productId !== productId,
						),
					}))
				},
				clear: () => {
					set({ entries: [] })
				},
			}),
			{
				name: 'cart-storage',
			},
		),
	),
)
