import { d } from '@/db'

type Nomenclature = typeof d.nomenclature.$inferSelect
type User = typeof d.user.$inferSelect

export type GenericProduct = Nomenclature & { seller?: User }
