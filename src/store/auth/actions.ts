import { batch } from 'react-redux'
import Cookies from 'js-cookie'
import { AxiosError, AxiosResponse } from 'axios'
import AuthAPI from './api'
import * as ActionTypes from './constants'
import { AppDispatch } from '../config-store'
import { TRequestLogin, TRequestRegister } from '../../types/auth'
import { ACCESS_TOKEN } from '../../utils/constants'
import { TUser } from '../../types/user'
import { getAuthErrorMessage } from './helper'
import { TAuthValidatorServerError } from './types'
import { setAlert } from '../alert/actions'

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
  payload: TUser | null
}
interface ISetIsLoggedIn {
  type: typeof ActionTypes.SET_IS_LOGGEG_IN
  payload: boolean
}
interface ISetAppLock {
  type: typeof ActionTypes.SET_APP_LOCK
  payload: boolean
}

interface ISetRegisterRequest {
  type: typeof ActionTypes.SET_REGISTER_REQUEST
  payload: boolean
}
interface ISetRegisterFailure {
  type: typeof ActionTypes.SET_REGISTER_FAILURE
  payload: { status: boolean; messages?: TAuthValidatorServerError | null }
}
interface ISetRegisterSuccess {
  type: typeof ActionTypes.SET_REGISTER_SUCCESS
  payload: boolean
}

// Union action types
export type AuthAction =
  | ISetAuthRequest
  | ISetAuthFailure
  | ISetAuthState
  | ISetIsLoggedIn
  | ISetAppLock
  | ISetRegisterRequest
  | ISetRegisterFailure
  | ISetRegisterSuccess

// Actions creators.
export const setAuthRequest = (payload: boolean): ISetAuthRequest => ({
  type: ActionTypes.SET_AUTH_REQUEST,
  payload,
})

export const setAuthFailure = (payload: boolean): ISetAuthFailure => ({
  type: ActionTypes.SET_AUTH_FAILURE,
  payload,
})

export const setAuthState = (payload: TUser | null): ISetAuthState => ({
  type: ActionTypes.SET_AUTH_STATE,
  payload,
})

export const setIsLoggedIn = (payload: boolean): ISetIsLoggedIn => ({
  type: ActionTypes.SET_IS_LOGGEG_IN,
  payload,
})

export const loginAction = (requestData: TRequestLogin) => {
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

// export const unlockAction = (pin: string, email: string) => {
//   return async (dispatch: AppDispatch): Promise<void> => {
//     try {
//       const { status, data } = await AuthAPI.unlock(pin)
//       if (status === 200 && email.trim() === data.email.trim()) {
//         dispatch(setAppLock(false))
//       }
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.log('e', e)
//     }
//   }
// }

const setRegisterRequest = (payload: boolean): ISetRegisterRequest => ({
  type: ActionTypes.SET_REGISTER_REQUEST,
  payload,
})

const setRegisterFailure = (payload: {
  status: boolean
  messages?: TAuthValidatorServerError | null
}): ISetRegisterFailure => ({
  type: ActionTypes.SET_REGISTER_FAILURE,
  payload,
})

const setRegisterSuccess = (payload: boolean): ISetRegisterSuccess => ({
  type: ActionTypes.SET_REGISTER_SUCCESS,
  payload,
})

export const registerAction = (registerData: TRequestRegister) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setRegisterRequest(true))
    await AuthAPI.register(registerData)
      .then((response) => {
        const { status, data } = response
        if (status === 201 /* 201 Crated */ && data) {
          // set token
          Cookies.set(ACCESS_TOKEN, data.token)
          batch(() => {
            dispatch(setRegisterSuccess(true))
            dispatch(setRegisterRequest(false))
            dispatch(setAuthState(data.user))
            dispatch(setIsLoggedIn(true))
          })
        }
      })
      .catch((e: AxiosError): void => {
        let messages
        if (e.response.data) {
          messages = getAuthErrorMessage(e.response.data)
        }
        batch(() => {
          dispatch(setRegisterFailure({ status: true, messages }))
          dispatch(setRegisterRequest(false))
          dispatch(setRegisterSuccess(false))
          dispatch(setAlert({ open: true, message: 'Register failed!', severity: 'error' }))
        })
      })
  }
}
