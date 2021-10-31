import { batch } from 'react-redux'
import * as ActionTypes from './constants'
import { AppDispatch } from '../config-store'
import PhrasebookCategoryAPI from './api'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

// Actions definiition

interface IFetchingPhrasebookCategoriesRequest {
  type: typeof ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUEST
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
  | IFetchingPhrasebookCategoriesRequest
  | IFetchingPhrasebookCategoriesFailure
  | ISetListPhrasebookCategories

// Actions creator.
const fetchingPhrasebookCategoriesRequest = (payload: boolean): IFetchingPhrasebookCategoriesRequest => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUEST,
  payload,
})

export const setListPhrasebookCategries = (payload: TPhrasebookCategory[]): ISetListPhrasebookCategories => ({
  type: ActionTypes.SET_PHRASEBOOK_CATEGORIES,
  payload,
})

const fetchingPhrasebookCategoriesFailure = (payload: boolean): IFetchingPhrasebookCategoriesFailure => ({
  type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE,
  payload,
})

export const fetchPhrasebookCategories = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(fetchingPhrasebookCategoriesRequest(true))
    try {
      const { status, data } = await PhrasebookCategoryAPI.findAll()
      if (status === 200) {
        batch(() => {
          dispatch(fetchingPhrasebookCategoriesFailure(false))
          dispatch(fetchingPhrasebookCategoriesRequest(false))
          dispatch(setListPhrasebookCategries(data.data))
        })
      }
    } catch (e) {
      batch(() => {
        dispatch(fetchingPhrasebookCategoriesRequest(false))
        dispatch(fetchingPhrasebookCategoriesFailure(true))
        dispatch(setListPhrasebookCategries([]))
      })
    }
  }
}
