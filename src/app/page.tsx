import { Db } from '@/lib/drizzle'
import { user } from '@/lib/drizzle/schema'
import { AppShell, Button } from '@mantine/core'

export default async function Home() {
	// const db = await Db()
	// const records = await db.select().from(user)
	// console.log(records)

	return (
		<AppShell>
			<Button>Click me</Button>
		</AppShell>
	)
}
