import * as ActionTypes from './constants'
import { TPhrase } from '../../types/phrasebook'
import { PhrasebookAction } from './actions'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

export interface PhrasebookState {
  isFetching: boolean
  isError: boolean
  phrases: TPhrase[] | null
  phrase: TPhrase | null
  category: TPhrasebookCategory | null
  drawerAddEditPhrase: {
    status: boolean
    id?: number | null
  }

  createLoading: boolean
  createError: boolean
  createSuccess: boolean

  updateLoading: boolean
  updateError: boolean
  updateSuccess: boolean
}

const initialState = {
  isFetching: false,
  isError: false,
  phrases: [],
  phrase: null,
  category: null,

  drawerAddEditPhrase: {
    status: false,
    id: null,
  },

  createLoading: false,
  createError: false,
  createSuccess: false,

  updateLoading: false,
  updateError: false,
  updateSuccess: false,
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

    case ActionTypes.SET_DRAWER_ADD_EDIT_PHRASE:
      return {
        ...state,
        drawerAddEditPhrase: {
          status: action.payload.status,
          id: action.payload.id,
        },
      }

    case ActionTypes.CREATE_PHRASE_LOADING:
      return {
        ...state,
        createLoading: true,
        createError: false,
        createSuccess: false,
      }
    case ActionTypes.CREATE_PHRASE_FAILURE:
      return {
        ...state,
        createLoading: false,
        createError: true,
        createSuccess: false,
      }
    case ActionTypes.CREATE_PHRASE_SUCCESS:
      return {
        ...state,
        createLoading: false,
        createError: false,
        createSuccess: true,
      }

    case ActionTypes.UPDATE_PHRASE_LOADING:
      return {
        ...state,
        updateLoading: true,
        updateError: false,
        updateSuccess: false,
      }
    case ActionTypes.UPDATE_PHRASE_FAILURE:
      return {
        ...state,
        updateLoading: false,
        updateError: true,
        updateSuccess: false,
      }
    case ActionTypes.UPDATE_PHRASE_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        updateError: false,
        updateSuccess: true,
      }

    case ActionTypes.FETCHING_PHRASE_BY_ID_LOADING:
      return {
        ...state,
        isError: false,
        isFetching: true,
        phrase: null,
      }
    case ActionTypes.FETCHING_PHRASE_BY_ID_FAILURE:
      return {
        ...state,
        isError: true,
        isFetching: false,
        phrase: null,
      }
    case ActionTypes.FETCHING_PHRASE_BY_ID_SUCCESS:
      return {
        ...state,
        isError: false,
        isFetching: false,
        phrase: action.payload,
      }

    default:
      return state
  }
}

export default phrasebookReducer
