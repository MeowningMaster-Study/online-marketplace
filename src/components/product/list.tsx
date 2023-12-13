'use client'

import { useState } from 'react'
import { GenericProduct } from './type'
import { Grid, GridCol } from '@mantine/core'
import { ProductCard } from './card'
import { removeProduct } from '@/logic/nomenclature/remove'

type Props = {
	products: GenericProduct[]
}

export function ProductList(props: Props) {
	const [products, setProducts] = useState(props.products)

	async function remove(id: number) {
		if (!confirm('Are you sure?')) return
		await removeProduct(id)
		setProducts(products.filter((product) => product.id !== id))
	}

	return (
		<Grid>
			{products.map((product) => (
				<GridCol key={product.id} span='auto'>
					<ProductCard {...product} remove={remove} />
				</GridCol>
			))}
		</Grid>
	)
}
