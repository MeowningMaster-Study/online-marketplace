import { AnchorLink } from '@/components/mantine/anchor-link'
import { SignUpForm } from './form'
import { Card, Center, Title } from '@mantine/core'

export default function Page() {
	return (
		<Center className='h-screen'>
			<Card padding='xl'>
				<Title order={4}>Marketplace</Title>
				<Title order={5}>Create a new account</Title>
				<SignUpForm className='my-4' />
				<AnchorLink href='/login'>Already have an account? Log in</AnchorLink>
			</Card>
		</Center>
	)
}
