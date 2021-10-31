import * as ActionTypes from './constants'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'
import { PhrasebookCategoryAction } from './actions'

export interface PhrasebookCategoryState {
  isFetching: boolean
  isError: boolean
  categories: TPhrasebookCategory[]
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
    case ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE:
      return {
        ...state,
        isError: action.payload,
      }
    case ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
      }
    case ActionTypes.SET_PHRASEBOOK_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    default:
      return state
  }
}

export default phrasebookCategoryReducer
