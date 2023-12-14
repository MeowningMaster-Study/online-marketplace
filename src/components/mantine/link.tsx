'use client'

import {
	Anchor,
	AnchorProps,
	ElementProps,
	NavLink,
	NavLinkProps,
} from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MyAnchorProps = AnchorProps & ElementProps<typeof Link>
export function MyAnchor(props: MyAnchorProps) {
	return <Anchor {...props} component={Link} />
}

type MyNavLinkProps = NavLinkProps & ElementProps<typeof Link>
export function MyNavLink(props: MyNavLinkProps) {
	const pathname = usePathname()
	const active = pathname === props.href
	return <NavLink {...props} component={Link} active={active} />
}
