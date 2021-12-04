import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from './constants'

export const saveToken = (token: string): void => {
  Cookies.set(ACCESS_TOKEN, token)
}

export const getToken = (): string | null => {
  if (typeof window === undefined) {
    return null
  }
  return Cookies.get(ACCESS_TOKEN)
}

export const removeToken = (): void => {
  Cookies.remove(ACCESS_TOKEN)
}
