import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TPhrase } from '../../types/phrasebook'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

// Actions definiition
interface TFetchingPhrasebook {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_REQUESTED
  paylod: string
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

// Union action types
export type PhrasebookAction =
  | TFetchingPhrasebook
  | IFetchingPhrasebookLoading
  | IFetchingPhrasebookFailure
  | IFetchingPhrasebookSuccess
  | IUpdatePhraseItem

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

export const updatePhraseItem = (id: number, updatedPhrase: TPhrase): IUpdatePhraseItem => ({
  type: ActionTypes.UPDATE_PHRASE_ITEM,
  payload: { id, updatedPhrase },
})
