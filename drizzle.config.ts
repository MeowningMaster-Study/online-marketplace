import type { Config } from 'drizzle-kit'

export default {
    schema: './src/lib/drizzle/schema/index.ts',
    out: './migrations',
} satisfies Config
