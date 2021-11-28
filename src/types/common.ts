export interface IStateFailure {
  status: boolean
  message?: string
  messages?: string[] | null
}

export interface IApiResponseError {
  success: boolean
  message?: string
  messages?: string[] | null
}
