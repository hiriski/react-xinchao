// eslint-disable-next-line no-underscore-dangle
export const __DEV__ = process.env.NODE_ENV === 'development'

export const API_BASE_URL = __DEV__
  ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT
  : process.env.REACT_APP_API_BASE_URL_PRODUCTION

export const APP_NAME = 'Xin Chào'
export const ACCESS_TOKEN = '@accessToken'
export const LIMIT = 20
export const PREFIX_APP_VERSION = process.env.REACT_APP_PREFIX_APP_VERSION

export const ROUTES = {
  SIGNIN: '/signin',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PHRASEBOOK: PREFIX_APP_VERSION ? `${PREFIX_APP_VERSION}/phrasebook` : '/phrasebook',
}
