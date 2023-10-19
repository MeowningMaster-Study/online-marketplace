import { sql } from '@vercel/postgres'
import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { VercelPgDatabase, drizzle } from 'drizzle-orm/vercel-postgres'

let db: VercelPgDatabase

export async function Db() {
    if (!db) {
        db = drizzle(sql)
        await migrate(db, { migrationsFolder: './migrations' })
    }
    return db
}
