import { combineReducers } from 'redux'
import authReducer, { IAuthState } from './auth/reducer'
import sampleReducer, { SampleState } from './sample/reducer'
import alertReducer, { AlertState } from './alert/reducer'
import phrasebookCategoryReducer, { PhrasebookCategoryState } from './phrasebookCategory/reducer'

export interface RootState {
  sample: SampleState
  auth: IAuthState
  alert: AlertState
  phrasebookCategory: PhrasebookCategoryState
}

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
  alert: alertReducer,
  phrasebookCategory: phrasebookCategoryReducer,
})
