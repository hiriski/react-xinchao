import * as ActionTypes from './constants'
import { TPhrase } from '../../types/phrasebook'
import { PhrasebookAction } from './actions'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

export interface PhrasebookState {
  isFetching: boolean
  isError: boolean
  phrases: TPhrase[] | null
  category: TPhrasebookCategory | null
}

const initialState = {
  isFetching: false,
  isError: false,
  phrases: [],
  category: null,
}

const updatePhraseItem = (phrases: TPhrase[], id: number, updatedPhrase: TPhrase): TPhrase[] => {
  const index = phrases.findIndex((i) => i.id === id)
  return [
    ...phrases.slice(0, index), // everything before current phrase
    {
      ...phrases[index],
      ...updatedPhrase,
    },
    ...phrases.slice(index + 1), // everything after current phrase
  ]
}

const phrasebookReducer = (state: PhrasebookState = initialState, action: PhrasebookAction): PhrasebookState => {
  switch (action.type) {
    case ActionTypes.FETCHING_PHRASEBOOK_LOADING:
      return {
        ...state,
        isError: false,
        isFetching: true,
      }
    case ActionTypes.FETCHING_PHRASEBOOK_FAILURE:
      return {
        ...state,
        isError: true,
        isFetching: false,
      }
    case ActionTypes.FETCHING_PHRASEBOOK_SUCCESS:
      return {
        ...state,
        isError: false,
        isFetching: false,
        phrases: action.payload.phrases,
        category: action.payload.category,
      }
    case ActionTypes.UPDATE_PHRASE_ITEM:
      return {
        ...state,
        phrases: updatePhraseItem(state.phrases, action.payload.id, action.payload.updatedPhrase),
      }

    default:
      return state
  }
}

export default phrasebookReducer
