// import { AlertColor } from '@mui/material'
import { AlertAction } from './actions'
import * as ActionTypes from './constants'
import { TPayloadSetAlert } from './types'

// export type AlertState = {
//   open: boolean
//   message: string | null
//   severity?: AlertColor | null
//   autoHideDuration?: number
// }
const ADR_DEFAULT = 3500

export type AlertState = TPayloadSetAlert

const initialState: AlertState = {
  open: false,
  message: null,
  severity: 'warning',
  autoHideDuration: ADR_DEFAULT,
}

const alertReducer = (state: AlertState = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        ...state,
        open: action.payload.open,
        message: action.payload.message ?? '',
        severity: action.payload.severity ?? 'warning',
        autoHideDuration: action.payload.autoHideDuration ?? ADR_DEFAULT,
      }
    case ActionTypes.RESET_ALERT:
      return initialState
    default:
      return initialState
  }
}

export default alertReducer
