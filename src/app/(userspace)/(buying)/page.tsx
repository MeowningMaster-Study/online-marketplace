import { ProductList } from '@/components/product/list'
import { getStoreNomenclatures } from '@/logic/nomenclature/get-store'

export default async function Page() {
	const products = await getStoreNomenclatures()

	return (
		<>
			<ProductList products={products} />
		</>
	)
}
