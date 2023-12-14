'use client'

import { getOrdersByStatus } from '@/logic/analytics/orders-by-status'
import type { getSalesByBuyer } from '@/logic/analytics/sales-by-buyer'
import type { getSalesByCategory } from '@/logic/analytics/sales-by-category'
import type { getSalesByProduct } from '@/logic/analytics/sales-by-product'
import { Flex, Title } from '@mantine/core'
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	DefaultDataPoint,
	ChartDataset,
} from 'chart.js'
import { ChartProps, Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
	salesByCategory: Awaited<ReturnType<typeof getSalesByCategory>>
	salesByBuyer: Awaited<ReturnType<typeof getSalesByBuyer>>
	salesByProduct: Awaited<ReturnType<typeof getSalesByProduct>>
	ordersByStatus: Awaited<ReturnType<typeof getOrdersByStatus>>
}

const colors: Pick<ChartDataset<'pie'>, 'backgroundColor' | 'borderColor'> = {
	backgroundColor: [
		'rgba(255, 99, 132, 0.2)',
		'rgba(54, 162, 235, 0.2)',
		'rgba(255, 206, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(153, 102, 255, 0.2)',
		'rgba(255, 159, 64, 0.2)',
	],
	borderColor: [
		'rgba(255,99,132,1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(75, 192, 192, 1)',
		'rgba(153, 102, 255, 1)',
		'rgba(255, 159, 64, 1)',
	],
}

function pieData(
	labels: string[],
	values: number[],
): ChartProps<'pie', DefaultDataPoint<'pie'>, string>['data'] {
	return {
		labels,
		datasets: [
			{
				label: 'Total',
				data: values,
				...colors,
			},
		],
	}
}

function PieChart({
	title,
	data,
}: { title: string; data: ChartProps<'pie'>['data'] }) {
	return (
		<div>
			<Title order={2}>{title}</Title>
			<Pie data={data} style={{ maxWidth: '300px', maxHeight: '300px' }} />
		</div>
	)
}

export function Content(props: Props) {
	const salesByCategoriesData = pieData(
		props.salesByCategory.map(({ category }) => category),
		props.salesByCategory.map(({ sum }) => sum),
	)

	const salesByBuyerData = pieData(
		props.salesByBuyer.map(({ user }) => user),
		props.salesByBuyer.map(({ sum }) => sum),
	)

	const salesByProductData = pieData(
		props.salesByProduct.map(({ nomenclature }) => nomenclature),
		props.salesByProduct.map(({ sum }) => sum),
	)

	const ordersByStatusData = pieData(
		props.ordersByStatus.map(({ status }) => status),
		props.ordersByStatus.map(({ count }) => count),
	)

	return (
		<Flex className='text-center' wrap='wrap' gap='sm'>
			<PieChart title='Sales by categories' data={salesByCategoriesData} />
			<PieChart title='Sales by buyers' data={salesByBuyerData} />
			<PieChart title='Sales by product' data={salesByProductData} />
			<PieChart title='Orders by status' data={ordersByStatusData} />
		</Flex>
	)
}
