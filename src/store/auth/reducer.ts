import * as ActionTypes from './constants'
import { AuthAction } from './actions'
import { TUser } from '../../types/user'
import { IStateFailure } from '../../types/common'

const initialStateError: IStateFailure = {
  status: false,
  message: null,
  messages: null,
}

export interface AuthState {
  isAuthenticated: boolean
  loginLoading: boolean
  loginError?: IStateFailure
  user?: TUser | null

  registerLoading: boolean
  registerError?: IStateFailure
  registerSuccess: boolean
}

const initialState = {
  loginLoading: false,
  loginError: initialStateError,
  isAuthenticated: false,
  user: null,

  registerLoading: false,
  registerError: initialStateError,
  registerSuccess: false,
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loginLoading: true,
        isAuthenticated: false,
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginError: initialStateError,
        loginLoading: false,
        isAuthenticated: true,
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loginError: action.payload ?? /* coming from saga --> */ { ...state.loginError, status: true },
        loginLoading: false,
      }
    case ActionTypes.REGISTER_LOADING:
      return {
        ...state,
        user: null,
        registerLoading: true,
        isAuthenticated: false,
      }
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        registerError: initialStateError,
        registerLoading: false,
        isAuthenticated: true,
      }
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        registerError: action.payload ?? /* coming from saga --> */ { ...state.loginError, status: true },
        loginLoading: false,
      }
    default:
      return state
  }
}

export default authReducer
