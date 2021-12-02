import { string } from 'prop-types'
import * as ActionTypes from './constants'
import { TRequestLoginWithSocialAccount, TRequestLogin, TRequestRegister } from '../../types/auth'
import { TUser } from '../../types/user'
import { IStateFailure } from '../../types/common'

// Actions definiition

interface LoginRequested {
  type: typeof ActionTypes.LOGIN_REQUESTED
  payload: TRequestLogin
}
interface LoginLoading {
  type: typeof ActionTypes.LOGIN_LOADING
}
interface LoginFailure {
  type: typeof ActionTypes.LOGIN_FAILURE
  payload: IStateFailure
}
interface LoginSuccess {
  type: typeof ActionTypes.LOGIN_SUCCESS
  payload: TUser | null
}

interface RegisterRequested {
  type: typeof ActionTypes.REGISTER_REQUESTED
  payload: TRequestRegister
}
interface RegisterLoading {
  type: typeof ActionTypes.REGISTER_LOADING
}
interface RegisterFailure {
  type: typeof ActionTypes.REGISTER_FAILURE
  payload: IStateFailure
}
interface RegisterSuccess {
  type: typeof ActionTypes.REGISTER_SUCCESS
  payload: TUser | null
}
interface LoginWithSocialAccountRequested {
  type: typeof ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_REQUESTED
  payload: TRequestLoginWithSocialAccount
}

interface LoginWithSocialAccountLoading {
  type: typeof ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_LOADING
}

interface LoginWithSocialAccountFailure {
  type: typeof ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE
  payload: IStateFailure
}
interface LoginWithSocialAccountSuccess {
  type: typeof ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS
  payload: { provider: string; user: TUser }
}

// Union action types
export type AuthAction =
  | LoginRequested
  | LoginLoading
  | LoginFailure
  | LoginSuccess
  | RegisterRequested
  | RegisterLoading
  | RegisterFailure
  | RegisterSuccess
  | LoginWithSocialAccountRequested
  | LoginWithSocialAccountLoading
  | LoginWithSocialAccountFailure
  | LoginWithSocialAccountSuccess

// Actions creators.

export const login = (payload: TRequestLogin): LoginRequested => ({
  type: ActionTypes.LOGIN_REQUESTED,
  payload,
})

export const setLoginError = (payload: IStateFailure): LoginFailure => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload,
})

export const register = (payload: TRequestRegister): RegisterRequested => ({
  type: ActionTypes.REGISTER_REQUESTED,
  payload,
})

export const setRegisterError = (payload: IStateFailure): RegisterFailure => ({
  type: ActionTypes.REGISTER_FAILURE,
  payload,
})

// Login with social account.
export const loginWithSocialAccount = (payload: TRequestLoginWithSocialAccount): LoginWithSocialAccountRequested => ({
  type: ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_REQUESTED,
  payload,
})

export const setLoginWithSocialAccountError = (payload: IStateFailure): LoginWithSocialAccountFailure => ({
  type: ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE,
  payload,
})

export const loginWithSocialAccountSuccess = (provider: string, user: TUser): LoginWithSocialAccountSuccess => ({
  type: ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS,
  payload: { provider, user },
})
