'use client'

import { HTMLAttributes } from 'react'
import { useForm } from '@mantine/form'
import { Button, NumberInput, Select, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { ProductCreate, createProduct } from '@/logic/nomenclature/create'
import { productCategories } from '@/constants/categories'

export function ProductCreateForm(props: HTMLAttributes<HTMLDivElement>) {
	const form = useForm<ProductCreate>({
		initialValues: {
			name: '',
			description: '',
			category: '',
			price: 0,
		},
	})

	const router = useRouter()

	async function submitFrontend(values: ProductCreate) {
		await createProduct(values)
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
				<Button type='submit'>Create</Button>
			</div>
		</form>
	)
}
