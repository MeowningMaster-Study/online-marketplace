import { ProductList } from '@/components/product/list'
import { getMyNomenclatures } from '@/logic/nomenclature/get-my'
import { ActionIcon } from '@mantine/core'
import { IconPlaylistAdd } from '@tabler/icons-react'

export default async function Page() {
	const products = await getMyNomenclatures()

	return (
		<>
			<ActionIcon
				className='fixed bottom-4 right-4'
				size={50}
				component='a'
				href='/product/create'
			>
				<IconPlaylistAdd style={{ width: '70%', height: '70%' }} />
			</ActionIcon>
			<ProductList products={products} />
		</>
	)
}
