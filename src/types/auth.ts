export type TLoginUser = {
  id: string
  name: string
  email: string
  photoUrl?: string
  createdAt?: string
}

export type TRequestAuth = {
  pin: string
  email: string
}
