import * as ActionTypes from './constants'

// Action definition.
export interface SetSampleMessage {
  type: typeof ActionTypes.SET_SAMPLE_MESSAGE
  message: string
}
export interface SetSampleStatus {
  type: typeof ActionTypes.SET_SAMPLE_STATUS
  status: boolean
}

// Union action types.
export type Action = SetSampleMessage | SetSampleStatus

// Action creators.
export const setSampleMessage = (message: string): SetSampleMessage => ({
  type: ActionTypes.SET_SAMPLE_MESSAGE,
  message,
})

export const setSampleStatus = (status: boolean): SetSampleStatus => ({
  type: ActionTypes.SET_SAMPLE_STATUS,
  status,
})
