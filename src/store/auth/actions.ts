import { batch } from 'react-redux'
import Cookies from 'js-cookie'
import AuthAPI from './api'
import * as ActionTypes from './constants'
import { AppDispatch } from '../config-store'
import { TLoginUser, TRequestAuth } from '../../types/auth'
import { ACCESS_TOKEN } from '../../utils/constants'

// Actions definiition
interface ISetAuthRequest {
  type: typeof ActionTypes.SET_AUTH_REQUEST
  payload: boolean
}
interface ISetAuthFailure {
  type: typeof ActionTypes.SET_AUTH_FAILURE
  payload: boolean
}
interface ISetAuthState {
  type: typeof ActionTypes.SET_AUTH_STATE
  payload: unknown
}
interface ISetIsLoggedIn {
  type: typeof ActionTypes.SET_IS_LOGGEG_IN
  payload: boolean
}
interface ISetAppLock {
  type: typeof ActionTypes.SET_APP_LOCK
  payload: boolean
}

// Union action types
export type AuthAction = ISetAuthRequest | ISetAuthFailure | ISetAuthState | ISetIsLoggedIn | ISetAppLock

// Actions creators.
export const setAuthRequest = (payload: boolean): ISetAuthRequest => ({
  type: ActionTypes.SET_AUTH_REQUEST,
  payload,
})

export const setAuthFailure = (payload: boolean): ISetAuthFailure => ({
  type: ActionTypes.SET_AUTH_FAILURE,
  payload,
})

export const setAuthState = (payload: TLoginUser): ISetAuthState => ({
  type: ActionTypes.SET_AUTH_STATE,
  payload,
})

export const setIsLoggedIn = (payload: boolean): ISetIsLoggedIn => ({
  type: ActionTypes.SET_IS_LOGGEG_IN,
  payload,
})

export const loginAction = (requestData: TRequestAuth) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setAuthRequest(true))
    try {
      const { status, data } = await AuthAPI.login(requestData)
      if (status === 200 && data) {
        // set token
        Cookies.set(ACCESS_TOKEN, data.token)

        batch(() => {
          dispatch(setAuthState(data.user))
          dispatch(setIsLoggedIn(true))
          dispatch(setAuthRequest(false))
        })
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      dispatch(setAuthFailure(true))
      dispatch(setAuthRequest(false))
    }
  }
}

export const logoutAction = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    const resetAuth = (): void => {
      batch(() => {
        dispatch(setAuthState(null))
        dispatch(setIsLoggedIn(false))
      })
    }
    try {
      const { status } = await AuthAPI.revokeToken()
      if (status === 200) {
        resetAuth()
      }
    } catch (e) {
      resetAuth() // however reset auth state
    }
  }
}

export const setAppLock = (payload: boolean): ISetAppLock => ({
  type: ActionTypes.SET_APP_LOCK,
  payload,
})

export const unlockAction = (pin: string, email: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { status, data } = await AuthAPI.unlock(pin)
      if (status === 200 && email.trim() === data.email.trim()) {
        dispatch(setAppLock(false))
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('e', e)
    }
  }
}
