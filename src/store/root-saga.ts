import { spawn } from 'redux-saga/effects'
import type { SagaIterator } from '@redux-saga/types'

// Import sagas.
import phrasebookCategorySaga from './phrasebook-category/saga'
import authSaga from './auth/saga'

// Export the root saga
export default function* rootSaga(): SagaIterator {
  yield spawn(phrasebookCategorySaga)
  yield spawn(authSaga)
}
