import { d } from '@/db/index'
import { Badge, Card, CardSection, Group, Image, Text } from '@mantine/core'
import { IconUser, IconUserSquareRounded } from '@tabler/icons-react'

type Nomenclature = typeof d.nomenclature.$inferSelect
type User = typeof d.user.$inferSelect
type Props = Nomenclature & { seller?: User }

export function ProductCard(props: Props) {
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

			{props.seller && (
				<div className='flex gap-2 mt-4'>
					<IconUserSquareRounded color='var(--mantine-color-dimmed)' />
					<Text size='sm' c='dimmed'>
						{props.seller.login}
					</Text>
				</div>
			)}
		</Card>
	)
}
