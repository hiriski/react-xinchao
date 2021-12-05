import * as ActionTypes from './constants'
import { AccountAction } from './actions'
import { IStateFailure } from '../../types/common'
import { TProfileUser } from '../../types/account'

const initialStateError: IStateFailure = {
  status: false,
  message: null,
  messages: null,
}

export interface AccountState {
  isFetching: boolean
  isError?: IStateFailure
  profile: TProfileUser | null
}

const initialState = {
  isFetching: false,
  isError: initialStateError,
  profile: null,
}

const accountReducer = (state: AccountState = initialState, action: AccountAction): AccountState => {
  switch (action.type) {
    case ActionTypes.FETCHING_PROFILE_LOADING:
      return {
        ...state,
        profile: null,
        isFetching: true,
        isError: initialStateError,
      }
    case ActionTypes.FETCHING_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isFetching: false,
        isError: initialStateError,
      }

    default:
      return state
  }
}

export default accountReducer
