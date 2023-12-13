import { Title } from '@mantine/core'
import { ProductCreateForm } from './form'

export default function Page() {
	return (
		<>
			<Title order={4}>Create product</Title>
			<ProductCreateForm className='my-4' />
		</>
	)
}
