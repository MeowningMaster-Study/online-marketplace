import { ProductCard } from '@/components/product/card'
import { getMyNomenclatures } from '@/logic/nomenclature/get-my'
import { Grid, GridCol } from '@mantine/core'

export default async function Page() {
	const products = await getMyNomenclatures()

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
