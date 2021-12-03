import { TUser } from './user'

export type TLoginUser = {
  success: boolean
  token: string
  token_type?: string
  user: TUser
}

export type TRegisterUser = TLoginUser

export type TLoginWithSocialAccount = TLoginUser & { provider: string }

export type TRequestLogin = {
  username_or_email: string
  email: string
}

export type TRequestRegister = {
  name: string
  email: string
  password: string
  password_confirmation?: string
}

export type TRequestLoginWithSocialAccount = {
  social_id: number | string
  social_name: string
  social_email: string
  social_photo_url: string
  social_provider: 'google' | 'facebook' | 'github' | 'twitter'
}
