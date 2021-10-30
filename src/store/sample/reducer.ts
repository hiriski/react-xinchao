import { Action } from './actions'
import * as ActionTypes from './constants'

export interface SampleState {
  message?: string
  status: boolean
}

const initialState = {
  message: '',
  status: false,
}

const sampleReducer = (state: SampleState = initialState, action: Action): SampleState => {
  switch (action.type) {
    case ActionTypes.SET_SAMPLE_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    case ActionTypes.SET_SAMPLE_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export default sampleReducer
