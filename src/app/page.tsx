import { Db } from '@/lib/drizzle'
import { user } from '@/lib/drizzle/schema'

export default async function Home() {
	const db = await Db()
	const records = await db.select().from(user)

	return <>{JSON.stringify(records)}</>
}
