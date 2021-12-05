import { combineReducers } from 'redux'
import sampleReducer, { SampleState } from './sample/reducer'
import authReducer, { AuthState } from './auth/reducer'
import accountReducer, { AccountState } from './account/reducer'
import alertReducer, { AlertState } from './alert/reducer'
import phrasebookReducer, { PhrasebookState } from './phrasebook/reducer'
import phrasebookCategoryReducer, { PhrasebookCategoryState } from './phrasebook-category/reducer'

export interface RootState {
  sample: SampleState
  auth: AuthState
  alert: AlertState
  phrasebookCategory: PhrasebookCategoryState
  phrasebook: PhrasebookState
  account: AccountState
}

export default combineReducers<RootState>({
  sample: sampleReducer,
  auth: authReducer,
  account: accountReducer,
  alert: alertReducer,
  phrasebook: phrasebookReducer,
  phrasebookCategory: phrasebookCategoryReducer,
})
