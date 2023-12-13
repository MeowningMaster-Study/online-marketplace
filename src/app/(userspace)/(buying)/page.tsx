import { ProductCard } from '@/components/product/card'
import { getStoreNomenclatures } from '@/logic/nomenclature/get-store'
import { Grid, GridCol } from '@mantine/core'

export default async function Page() {
	const products = await getStoreNomenclatures()

	return (
		<>
			<Grid>
				{products.map((product) => (
					<GridCol key={product.id} span='auto'>
						<ProductCard {...product} />
					</GridCol>
				))}
			</Grid>
		</>
	)
}
