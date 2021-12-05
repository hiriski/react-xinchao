import { spawn } from 'redux-saga/effects'
import type { SagaIterator } from '@redux-saga/types'

// Import sagas.
import authSaga from './auth/saga'
import accountSaga from './account/saga'
import phrasebookSaga from './phrasebook/saga'
import phrasebookCategorySaga from './phrasebook-category/saga'

// Export the root saga
export default function* rootSaga(): SagaIterator {
  yield spawn(accountSaga)
  yield spawn(authSaga)
  yield spawn(phrasebookSaga)
  yield spawn(phrasebookCategorySaga)
}
