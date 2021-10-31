import * as ActionTypes from './constants'
import { AuthAction } from './actions'
import { TLoginUser } from '../../types/auth'
import { TAuthValidatorServerError } from './types'
import { TUser } from '../../types/user'

export interface IAuthState {
  isLoading: boolean
  isError: boolean
  isLoggedIn: boolean
  authState?: TUser | null
  isLocked: boolean

  registerLoading: boolean
  registerFailure: {
    status: boolean
    messages?: TAuthValidatorServerError | null
  }
  registerSuccess: boolean
}

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  authState: null,
  isLocked: false,

  registerLoading: false,
  registerFailure: {
    status: false,
    messages: null,
  },
  registerSuccess: false,
}

const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case ActionTypes.SET_AUTH_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      }
    case ActionTypes.SET_AUTH_FAILURE:
      return {
        ...state,
        isError: action.payload,
      }
    case ActionTypes.SET_AUTH_STATE:
      return {
        ...state,
        authState: action.payload,
      }
    case ActionTypes.SET_IS_LOGGEG_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case ActionTypes.SET_APP_LOCK:
      return {
        ...state,
        isLocked: action.payload,
      }

    case ActionTypes.SET_REGISTER_REQUEST:
      return {
        ...state,
        registerLoading: action.payload,
      }
    case ActionTypes.SET_REGISTER_FAILURE:
      return {
        ...state,
        registerFailure: action.payload,
      }
    case ActionTypes.SET_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
