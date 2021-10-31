import { AlertColor } from '@mui/material'
import { AlertAction } from './actions'
import * as ActionTypes from './constants'

export type AlertState = {
  open: boolean
  message: string | null
  severity?: AlertColor | null
  autoHideDuration?: number
}

const initialState: AlertState = {
  open: false,
  message: null,
  severity: 'error',
  autoHideDuration: 3000,
}

const alertReducer = (state: AlertState = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        ...state,
        ...action.payload,
      }
    case ActionTypes.RESET_ALERT:
      return initialState
    default:
      return initialState
  }
}

export default alertReducer
