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

export type TCreatePhrase = {
  id_ID: string
  vi_VN: string
  en_US: string
  notes: string
  category_id: number
}

export type TUpdatePhrase = {
  id: number
  body: TCreatePhrase
}
