type TUserLevel = {
  id: string
  name: string
  description?: string
}

type TUserRole = {
  id: 5
  color?: string
  icon_name?: string
  icon_type?: string
  slug?: string
  text?: {
    id?: string
    vi?: string
    en?: string
    description?: string
  }
}

export type TUserSocialAccount = {
  social_id: string
  social_name: string
  social_provider: string
  social_photo_url: string
}

export type TUser = {
  id: number
  name: string
  email: string
  username: string
  photo_url?: string
  cover_photo_url?: string
  social_account?: TUserSocialAccount
  level?: TUserLevel
  role?: TUserRole
  gender?: string
  phone_number?: string
  birthday?: string
  about?: string
  phrases_count?: number
  contributor_points?: number
  created_at: Date | string
}
