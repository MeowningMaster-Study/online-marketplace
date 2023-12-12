import { Db } from '@/lib/drizzle'
import { test } from '@/lib/drizzle/schema/test'

export default async function Home() {
  const db = await Db()
	const records = await db.select().from(test)

	return (
		<>{JSON.stringify(records)}</>
	)
}
