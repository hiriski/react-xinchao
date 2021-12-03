import { combineReducers } from 'redux'
import authReducer, { AuthState } from './auth/reducer'
import sampleReducer, { SampleState } from './sample/reducer'
import alertReducer, { AlertState } from './alert/reducer'
import phrasebookCategoryReducer, { PhrasebookCategoryState } from './phrasebook-category/reducer'
import phrasebookReducer, { PhrasebookState } from './phrasebook/reducer'

export interface RootState {
  sample: SampleState
  auth: AuthState
  alert: AlertState
  phrasebookCategory: PhrasebookCategoryState
  phrasebook: PhrasebookState
}

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
  alert: alertReducer,
  phrasebookCategory: phrasebookCategoryReducer,
  phrasebook: phrasebookReducer,
})
