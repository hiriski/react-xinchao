import * as ActionTypes from './constants'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'
import { PhrasebookCategoryAction } from './actions'

export interface PhrasebookCategoryState {
  isFetching: boolean
  isError: boolean
  categories: TPhrasebookCategory[] | null
}

const initialState = {
  isFetching: false,
  isError: false,
  categories: [],
}

const phrasebookCategoryReducer = (
  state: PhrasebookCategoryState = initialState,
  action: PhrasebookCategoryAction
): PhrasebookCategoryState => {
  switch (action.type) {
    case ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_LOADING:
      return {
        ...state,
        isError: false,
        isFetching: true,
      }
    case ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE:
      return {
        ...state,
        isError: true,
        isFetching: false,
      }
    case ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_SUCCESS:
      return {
        ...state,
        isError: false,
        isFetching: false,
        categories: action.payload,
      }

    default:
      return state
  }
}

export default phrasebookCategoryReducer
