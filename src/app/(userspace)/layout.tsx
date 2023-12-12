import { PropsWithChildren } from 'react'
import { Shell } from './shell'

export default function Layout({ children }: PropsWithChildren) {
	return <Shell>{children}</Shell>
}
