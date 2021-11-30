import { TUser } from '../types/user'

const FALLBACK_INITIALS_NAME = 'A'

export const getProfilePhoto = (user: Partial<TUser>): string | null => {
  if (user.social_account) {
    return user.social_account.social_photo_url ? user.social_account.social_photo_url : null
  }
  return user.photo_url ? user.photo_url : null
}

export const hasProfilePhoto = (user: Partial<TUser>): boolean => {
  if (!user) return false
  if (getProfilePhoto(user) !== null) {
    return true
  }
  return false
}

export const getProfileInitialsName = (name: string): string => {
  if (!name) {
    return FALLBACK_INITIALS_NAME
  }
  return name
    .split(' ')
    .map((str) => str[0])
    .join('')
    .toUpperCase()
}
