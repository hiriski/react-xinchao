import { TUser } from './user'

export type TPhraseText = {
  id?: string
  vi?: string
  en?: string
  notes?: string
}

export type TPhraseAuthor = Partial<TUser>

export type TPhrase = {
  id: number
  is_favorited: boolean
  category_id?: number
  created_by?: TPhraseAuthor
  slug: string
  text: TPhraseText
}
