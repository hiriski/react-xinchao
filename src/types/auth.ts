import { TUser } from './user'

export type TLoginUser = {
  success: boolean
  token: string
  token_type?: string
  user: TUser
}

export type TRegisterUser = TLoginUser

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
