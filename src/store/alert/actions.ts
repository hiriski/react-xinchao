import * as ActionTypes from './constants'
import { TPayloadSetAlert } from './types'

// Actions definiition
interface ISetAlert {
  type: typeof ActionTypes.SET_ALERT
  payload: TPayloadSetAlert
}

interface IResetAlert {
  type: typeof ActionTypes.RESET_ALERT
}

// Union action types
export type AlertAction = ISetAlert | IResetAlert

// Actions creator.
export const setAlert = (payload: TPayloadSetAlert): ISetAlert => ({
  type: ActionTypes.SET_ALERT,
  payload,
})

export const resetAlert = (): IResetAlert => ({
  type: ActionTypes.RESET_ALERT,
})
