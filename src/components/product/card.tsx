import { d } from '@/db/index'
import { Badge, Card, CardSection, Group, Image, Text } from '@mantine/core'

type Nomenclature = Partial<typeof d.nomenclature.$inferSelect>

export function ProductCard(props: Nomenclature) {
	const price = Number(props.price).toFixed(2)

	return (
		<Card
			style={{ minWidth: '200px', maxWidth: '350px', paddingTop: 0 }}
			component='a'
			href={`/product/${props.id}`}
		>
			<CardSection>
				<Image src='/guirlande.webp' height={150} alt='Product' />
			</CardSection>

			<Group justify='space-between' mt='md' mb='xs'>
				<Text fw={500}>{props.name}</Text>
				<Badge color='pink'>{`${price}₴`}</Badge>
			</Group>

			<Text size='sm' c='dimmed'>
				{props.description}
			</Text>
		</Card>
	)
}
