import { create } from 'zustand'
import { combine } from 'zustand/middleware'

type ShellTitleState = {
	title?: string
}

export const useTitleStore = create(
	combine({ title: 'Marketplace' }, (set) => ({
		setTitle: (title: string) => set({ title }),
	})),
)
