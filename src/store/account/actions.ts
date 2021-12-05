import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TProfileUser } from '../../types/account'
import { TPhrase } from '../../types/phrasebook'

// Actions definiition
interface FetchProfileLoading {
  type: typeof ActionTypes.FETCHING_PROFILE_LOADING
}

interface FetchProfileSuccess {
  type: typeof ActionTypes.FETCHING_PROFILE_SUCCESS
  payload: TProfileUser
}

interface FetchingPhrasesByMeLoading {
  type: typeof ActionTypes.FETCHING_PHRASES_BY_ME_LOADING
}

interface FetchingPhrasesByMeSuccess {
  type: typeof ActionTypes.FETCHING_PHRASES_BY_ME_SUCCESS
  payload: TPhrase[]
}

// Union action types
export type AccountAction =
  | FetchProfileLoading
  | FetchProfileSuccess
  | FetchingPhrasesByMeSuccess
  | FetchingPhrasesByMeLoading

// Actions creators.
export const fetchProfile = (): AnyAction => ({
  type: ActionTypes.FETCHING_PROFILE_REQUESTED,
})

export const fetchingProfileSuccess = (payload: TProfileUser): FetchProfileSuccess => ({
  type: ActionTypes.FETCHING_PROFILE_SUCCESS,
  payload,
})

export const fetchPhrasesByMe = (): AnyAction => ({
  type: ActionTypes.FETCHING_PHRASES_BY_ME_REQUESTED,
})

export const fetchingPhrasesByMeSuccess = (payload: TPhrase[]): FetchingPhrasesByMeSuccess => ({
  type: ActionTypes.FETCHING_PHRASES_BY_ME_SUCCESS,
  payload,
})
