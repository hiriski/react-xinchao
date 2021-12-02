// eslint-disable-next-line no-underscore-dangle
export const __DEV__ = process.env.NODE_ENV === 'development'

export const API_BASE_URL = __DEV__
  ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT
  : process.env.REACT_APP_API_BASE_URL_PRODUCTION

export const APP_NAME = 'Xin Chào'
export const ACCESS_TOKEN = '@accessToken'
export const LIMIT = 24
export const PREFIX_APP_VERSION: string = process.env.REACT_APP_PREFIX_APP_VERSION

export const createPath = (path: string): string => {
  if (!PREFIX_APP_VERSION) return path
  return PREFIX_APP_VERSION.substr(-1) === '/' ? PREFIX_APP_VERSION + path : `${PREFIX_APP_VERSION}/${path}`
}

export const ROUTES = {
  HOME: createPath(''),
  SIGNIN: createPath('signin'),
  REGISTER: createPath('register'),
  FORGOT_PASSWORD: createPath('forgot-password'),
  RESET_PASSWORD: createPath('reset-password'),
  PHRASEBOOK: createPath('phrasebook'),
}
