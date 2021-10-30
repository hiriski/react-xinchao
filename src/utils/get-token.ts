import Cookies from 'js-cookie'
import { ACCESS_TOKEN } from './constants'

export const getToken = (): string | null => {
  if (typeof window === undefined) {
    return null
  }
  return Cookies.get(ACCESS_TOKEN)
}
