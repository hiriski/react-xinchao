import { TAuthValidatorServerError } from './types'

type TError = {
  message: TAuthValidatorServerError
  success?: boolean
}

export const getAuthErrorMessage = (data: TError): TAuthValidatorServerError | undefined => {
  if (data.success) {
    return undefined
  }
  return data.message
}
