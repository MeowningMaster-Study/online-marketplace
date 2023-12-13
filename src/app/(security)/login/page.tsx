import { AnchorLink } from '@/components/mantine/anchor-link'
import { LoginForm } from './form'
import { Card, Center, Title } from '@mantine/core'

export default function Login() {
	return (
		<Center className='h-screen'>
			<Card padding='xl'>
				<Title order={4}>Marketplace</Title>
				<Title order={5}>Log in to the system</Title>
				<LoginForm className='my-4' />
				<AnchorLink href='/sign-up'>Don't have an account? Sign up</AnchorLink>
			</Card>
		</Center>
	)
}
