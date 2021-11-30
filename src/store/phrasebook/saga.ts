import type { Effect, SagaIterator } from '@redux-saga/types'
import { SagaReturnType, put, call, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from './constants'

import PhrasebookAPI from './api'
import { httpResponseOK } from '../../utils/http'
import { setPhrasebook } from './actions'

// Type definitions of return of result.
type APIResponsePhrasebook = SagaReturnType<typeof PhrasebookAPI.findAllByCategory>

function* fetchPhrases({ payload }: Effect<string>): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_LOADING })
  try {
    const response: APIResponsePhrasebook = yield call(PhrasebookAPI.findAllByCategory, payload)
    if (httpResponseOK(response.status)) {
      const { category, phrases } = response.data
      yield put(setPhrasebook(category, phrases))
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_FAILURE })
  }
}

export default function* phrasebookSaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCHING_PHRASEBOOK_REQUESTED, fetchPhrases)
}
