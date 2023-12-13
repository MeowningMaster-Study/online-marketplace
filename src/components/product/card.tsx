import {
	Badge,
	Button,
	Card,
	CardSection,
	Group,
	Image,
	Text,
} from '@mantine/core'
import {
	IconEdit,
	IconShoppingCartPlus,
	IconTrash,
	IconUserSquareRounded,
} from '@tabler/icons-react'
import { GenericProduct } from './type'
import { useCartStore } from '@/stores/cart'

type Props = GenericProduct & {
	remove?: (id: number) => Promise<void>
}

export function ProductCard(props: Props) {
	const price = Number(props.price).toFixed(2)
	const addToCart = useCartStore((state) => state.add)

	return (
		<Card style={{ minWidth: '200px', maxWidth: '350px', paddingTop: 0 }}>
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
				<div className='flex gap-2 justify-between items-center mt-4'>
					<div className='flex gap-2'>
						<IconUserSquareRounded color='var(--mantine-color-dimmed)' />
						<Text size='sm' c='dimmed'>
							{props.seller.login}
						</Text>
					</div>
					<Button
						color='blue'
						radius='md'
						leftSection={<IconShoppingCartPlus />}
						onClick={() =>
							addToCart({
								productId: props.id,
								name: props.name,
								price: Number(props.price),
								sellerId: props.seller?.id as number,
								quantity: 1,
							})
						}
					>
						Add to cart
					</Button>
				</div>
			)}

			{!props.seller && (
				<div className='flex gap-2 justify-end items-center mt-4'>
					<Button
						color='blue'
						radius='md'
						leftSection={<IconEdit />}
						component='a'
						href={`/product/${props.id}/edit`}
					>
						Edit
					</Button>
					<Button
						color='red'
						radius='md'
						leftSection={<IconTrash />}
						onClick={() => props.remove?.(props.id)}
					>
						Delete
					</Button>
				</div>
			)}
		</Card>
	)
}
