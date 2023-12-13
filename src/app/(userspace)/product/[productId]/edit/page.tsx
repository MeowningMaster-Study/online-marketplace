import { Title } from '@mantine/core'
import { ProductUpdateForm } from './form'
import { getProduct } from '@/logic/nomenclature/get'

export default async function Page({
	params,
}: { params: { productId: string } }) {
	const id = Number(params.productId)
	const product = await getProduct(id)

	return (
		<>
			<Title order={4}>Update product</Title>
			<ProductUpdateForm className='my-4' product={product} />
		</>
	)
}
