import { combineReducers } from 'redux'
import authReducer, { IAuthState } from './auth/reducer'
import sampleReducer, { SampleState } from './sample/reducer'

export interface RootState {
  sample: SampleState
  auth: IAuthState
}

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
})
