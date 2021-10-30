export const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_BASE_URL_DEVELOPMENT
    : process.env.REACT_APP_API_BASE_URL_PRODUCTION

export const ACCESS_TOKEN = '@accessToken'

export const LIMIT = 20

export const PREFIX_APP_VERSION = '/app/v2'
