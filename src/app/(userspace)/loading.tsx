import { Center, Loader } from '@mantine/core'

export default function Loading() {
	return (
		<Center className='absolute top-1/2 left-1/2'>
			<Loader />
		</Center>
	)
}
