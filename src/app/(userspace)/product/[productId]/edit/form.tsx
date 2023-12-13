'use client'

import { HTMLAttributes } from 'react'
import { useForm } from '@mantine/form'
import { Button, NumberInput, Select, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { productCategories } from '@/constants/categories'
import { ProductUpdate, updateProduct } from '@/logic/nomenclature/update'
import { d } from '@/db'

type Product = typeof d.nomenclature.$inferSelect
type Props = HTMLAttributes<HTMLDivElement> & {
	product: Product
}

export function ProductUpdateForm(props: Props) {
	const form = useForm<ProductUpdate>({
		initialValues: {
			...props.product,
			price: Number(props.product.price),
		},
	})

	const router = useRouter()

	async function submitFrontend(values: ProductUpdate) {
		await updateProduct(props.product.id, values)
		router.push('/my-products')
	}

	return (
		<form
			onSubmit={form.onSubmit(submitFrontend)}
			className={`flex flex-col gap-4 ${props.className}`}
		>
			<TextInput
				required
				label='Name'
				placeholder='Orange'
				{...form.getInputProps('name')}
			/>
			<TextInput label='Description' {...form.getInputProps('description')} />

			<Select
				label='Category'
				placeholder='Pick value'
				required
				data={productCategories as unknown as string[]}
				{...form.getInputProps('category')}
			/>

			<NumberInput
				label='Price'
				min={0}
				required
				{...form.getInputProps('price')}
			/>

			<div className='flex justify-end'>
				<Button type='submit'>Update</Button>
			</div>
		</form>
	)
}
