import { ProductCard } from '@/components/product/card'
import { getMyNomenclatures } from '@/logic/nomenclature/get-my'
import { Grid, GridCol } from '@mantine/core'

const lorem = 'Lorem ipsum dolor sit amet consectetur adipi sicing elit'

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
