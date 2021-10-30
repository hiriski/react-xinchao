import { TUser } from './user'

export type TLoginUser = {
  success: boolean
  token: string
  token_type?: string
  user: TUser
}

export type TRequestLogin = {
  username_or_email: string
  email: string
}
