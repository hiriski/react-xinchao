import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TPhrase, TCreatePhrase, TUpdatePhrase } from '../../types/phrasebook'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

// Actions definiition
interface TFetchingPhrasebook {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_REQUESTED
  payload: string
}
interface IFetchingPhrasebookLoading {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_LOADING
}
interface IFetchingPhrasebookFailure {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_FAILURE
}
interface IFetchingPhrasebookSuccess {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_SUCCESS
  payload: {
    category: TPhrasebookCategory
    phrases: TPhrase[]
  }
}
interface IUpdatePhraseItem {
  type: typeof ActionTypes.UPDATE_PHRASE_ITEM
  payload: {
    id: number
    updatedPhrase: TPhrase
  }
}

interface SetDrawerAddEditPhrase {
  type: typeof ActionTypes.SET_DRAWER_ADD_EDIT_PHRASE
  payload: {
    status: boolean
    id?: number
  }
}

interface CreatePhrase {
  type: typeof ActionTypes.CREATE_PHRASE_REQUESTED
  payload: TCreatePhrase
}
interface CreatePhraseLoading {
  type: typeof ActionTypes.CREATE_PHRASE_LOADING
}
interface CreatePhraseFailure {
  type: typeof ActionTypes.CREATE_PHRASE_FAILURE
}
interface CreatePhraseSuccess {
  type: typeof ActionTypes.CREATE_PHRASE_SUCCESS
  payload?: TPhrase
}

interface UpdatePhrase {
  type: typeof ActionTypes.UPDATE_PHRASE_REQUESTED
  payload: TUpdatePhrase
}
interface UpdatePhraseLoading {
  type: typeof ActionTypes.UPDATE_PHRASE_LOADING
}
interface UpdatePhraseFailure {
  type: typeof ActionTypes.UPDATE_PHRASE_FAILURE
}
interface UpdatePhraseSuccess {
  type: typeof ActionTypes.UPDATE_PHRASE_SUCCESS
  payload?: TPhrase
}

interface FetchingPhraseById {
  type: typeof ActionTypes.FETCHING_PHRASE_BY_ID_REQUESTED
  payload: number
}
interface FetchingPhraseByIdLoading {
  type: typeof ActionTypes.FETCHING_PHRASE_BY_ID_LOADING
}
interface FetchingPhraseByIdFailure {
  type: typeof ActionTypes.FETCHING_PHRASE_BY_ID_FAILURE
}
interface FetchingPhraseByIdSuccess {
  type: typeof ActionTypes.FETCHING_PHRASE_BY_ID_SUCCESS
  payload: TPhrase
}

// Union action types
export type PhrasebookAction =
  | TFetchingPhrasebook
  | IFetchingPhrasebookLoading
  | IFetchingPhrasebookFailure
  | IFetchingPhrasebookSuccess
  | IUpdatePhraseItem
  | SetDrawerAddEditPhrase
  | CreatePhrase
  | CreatePhraseLoading
  | CreatePhraseSuccess
  | CreatePhraseFailure
  | UpdatePhrase
  | UpdatePhraseFailure
  | UpdatePhraseLoading
  | UpdatePhraseSuccess
  | FetchingPhraseById
  | FetchingPhraseByIdLoading
  | FetchingPhraseByIdFailure
  | FetchingPhraseByIdSuccess

// Actions creator.
export const fetchPhrasebook = (category: string): TFetchingPhrasebook | AnyAction => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_REQUESTED,
  payload: category,
})

export const fetchingPhrasebookSuccess = (
  category: TPhrasebookCategory,
  phrases: TPhrase[]
): Required<IFetchingPhrasebookSuccess> => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_SUCCESS,
  payload: { category, phrases },
})

// Update state phrase item (not update db)
export const updatePhraseItem = (id: number, updatedPhrase: TPhrase): IUpdatePhraseItem => ({
  type: ActionTypes.UPDATE_PHRASE_ITEM,
  payload: { id, updatedPhrase },
})

export const setDrawerAddEditPhrase = (status: boolean, id?: number): SetDrawerAddEditPhrase => ({
  type: ActionTypes.SET_DRAWER_ADD_EDIT_PHRASE,
  payload: { status, id },
})

export const createPhrase = (payload: TCreatePhrase): CreatePhrase => ({
  type: ActionTypes.CREATE_PHRASE_REQUESTED,
  payload,
})

export const createPhraseSuccess = (payload: TPhrase): CreatePhraseSuccess => ({
  type: ActionTypes.CREATE_PHRASE_SUCCESS,
  payload,
})

export const createPhraseLoading = (): CreatePhraseLoading => ({
  type: ActionTypes.CREATE_PHRASE_LOADING,
})

export const updatePhrase = (id: number, body: TCreatePhrase): UpdatePhrase => ({
  type: ActionTypes.UPDATE_PHRASE_REQUESTED,
  payload: { id, body },
})

export const udpatePhraseSuccess = (payload: TPhrase): UpdatePhraseSuccess => ({
  type: ActionTypes.UPDATE_PHRASE_SUCCESS,
  payload,
})

export const fetchPhraseById = (payload: number): FetchingPhraseById => ({
  type: ActionTypes.FETCHING_PHRASE_BY_ID_REQUESTED,
  payload,
})

export const fetchingPhraseByIdSuccess = (payload: TPhrase): FetchingPhraseByIdSuccess => ({
  type: ActionTypes.FETCHING_PHRASE_BY_ID_SUCCESS,
  payload,
})
