import * as ActionTypes from './constants'
import { AuthAction } from './actions'
import { TLoginUser } from '../../types/auth'

export interface IAuthState {
  isLoading: boolean
  isError: boolean
  isLoggedIn: boolean
  authState?: TLoginUser | unknown
  isLocked: boolean
}

const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  authState: null,
  isLocked: false,
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
    default:
      return state
  }
}

export default authReducer
