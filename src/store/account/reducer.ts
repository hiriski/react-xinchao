import * as ActionTypes from './constants'
import { AccountAction } from './actions'
import { IStateFailure } from '../../types/common'
import { TProfileUser } from '../../types/account'
import { TPhrase } from '../../types/phrasebook'

const initialStateError: IStateFailure = {
  status: false,
  message: null,
  messages: null,
}

export interface AccountState {
  isFetching: boolean
  isError?: IStateFailure
  profile: TProfileUser | null
  phrases: {
    isFetching: boolean
    isError: boolean
    data: TPhrase[]
  }
}

const initialState = {
  isFetching: false,
  isError: initialStateError,
  profile: null,
  phrases: {
    isFetching: false,
    isError: false,
    data: [],
  },
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

    // Phrases by me
    case ActionTypes.FETCHING_PHRASES_BY_ME_LOADING:
      return {
        ...state,
        phrases: {
          isFetching: true,
          isError: false,
          data: [],
        },
      }
    case ActionTypes.FETCHING_PHRASES_BY_ME_SUCCESS:
      return {
        ...state,
        phrases: {
          isFetching: false,
          isError: false,
          data: action.payload,
        },
      }

    default:
      return state
  }
}

export default accountReducer
