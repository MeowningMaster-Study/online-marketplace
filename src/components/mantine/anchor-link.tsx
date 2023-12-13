import { Anchor, AnchorProps, ElementProps } from '@mantine/core'
import Link from 'next/link'

interface Props
	extends AnchorProps,
		ElementProps<typeof Link, keyof AnchorProps> {}

export const AnchorLink = (props: Props) => {
	return <Anchor {...props} component={Link} />
}
