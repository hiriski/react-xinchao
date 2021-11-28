import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

// Actions definiition
interface IFetchingPhrasebookCategoriesLoading {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_LOADING
  payload: boolean
}
interface IFetchingPhrasebookCategoriesFailure {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE
  payload: boolean
}
interface ISetListPhrasebookCategories {
  type: typeof ActionTypes.SET_PHRASEBOOK_CATEGORIES
  payload: TPhrasebookCategory[]
}

// Union action types
export type PhrasebookCategoryAction =
  | IFetchingPhrasebookCategoriesLoading
  | IFetchingPhrasebookCategoriesFailure
  | ISetListPhrasebookCategories

// Actions creator.
export const fetchPhrasebookCategories = (): AnyAction => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUESTED,
})
