import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TProfileUser } from '../../types/account'

// Actions definiition
interface FetchProfileLoading {
  type: typeof ActionTypes.FETCHING_PROFILE_LOADING
}

interface FetchProfileSuccess {
  type: typeof ActionTypes.FETCHING_PROFILE_SUCCESS
  payload: TProfileUser
}

// Union action types
export type AccountAction = FetchProfileLoading | FetchProfileSuccess

// Actions creators.
export const fetchProfile = (): AnyAction => ({
  type: ActionTypes.FETCHING_PROFILE_REQUESTED,
})

export const fetchingProfileSuccess = (payload: TProfileUser): FetchProfileSuccess => ({
  type: ActionTypes.FETCHING_PROFILE_SUCCESS,
  payload,
})
