import { AnyAction } from 'redux'
import * as ActionTypes from './constants'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

// Actions definiition
interface IFetchingPhrasebookCategoriesLoading {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_LOADING
}
interface IFetchingPhrasebookCategoriesFailure {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE
}
interface IFetchingPhrasebookCategorySuccess {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_SUCCESS
  payload: TPhrasebookCategory[]
}

// Union action types
export type PhrasebookCategoryAction =
  | IFetchingPhrasebookCategoriesLoading
  | IFetchingPhrasebookCategoriesFailure
  | IFetchingPhrasebookCategorySuccess

// Actions creator.
export const fetchPhrasebookCategories = (): AnyAction => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUESTED,
})

export const fetchingPhrasebookCategorySuccess = (
  payload: TPhrasebookCategory[]
): IFetchingPhrasebookCategorySuccess => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_SUCCESS,
  payload,
})
