import type { Effect, SagaIterator } from '@redux-saga/types'
import { SagaReturnType, put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './constants'

import PhrasebookAPI from './api'
import { httpResponseCreated, httpResponseOK } from '../../utils/http'
import {
  createPhraseSuccess,
  fetchingPhrasebookSuccess,
  fetchingPhraseByIdSuccess,
  udpatePhraseSuccess,
} from './actions'
import { TCreatePhrase, TUpdatePhrase } from '../../types/phrasebook'
import { setAlert } from '../alert/actions'

// Type definitions of return of result.
type APIResponsePhrasebook = SagaReturnType<typeof PhrasebookAPI.findAllByCategory>
type APIResponseCreatePhrase = SagaReturnType<typeof PhrasebookAPI.create>
type APIResponseUpdatePhrase = SagaReturnType<typeof PhrasebookAPI.update>
type APIResponsePhraseById = SagaReturnType<typeof PhrasebookAPI.find>

function* fetchPhraseList({ payload }: Effect<string>): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_LOADING })
  try {
    const response: APIResponsePhrasebook = yield call(PhrasebookAPI.findAllByCategory, payload)
    if (httpResponseOK(response.status)) {
      const { category, phrases } = response.data
      yield put(fetchingPhrasebookSuccess(category, phrases))
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_FAILURE })
  }
}

function* createPhrase({ payload }: Effect<TCreatePhrase>): SagaIterator {
  yield put({ type: ActionTypes.CREATE_PHRASE_LOADING })

  try {
    const response: APIResponseCreatePhrase = yield call(PhrasebookAPI.create, payload)
    if (httpResponseCreated(response.status)) {
      yield put(createPhraseSuccess(response.data))
      yield put(setAlert({ open: true, message: 'Phrase has been saved.', severity: 'success' }))
    }
  } catch (e) {
    yield put({ type: ActionTypes.CREATE_PHRASE_FAILURE })
  }
}

function* fetchPhrase({ payload }: Effect<string>): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_PHRASE_BY_ID_LOADING })
  try {
    const response: APIResponsePhraseById = yield call(PhrasebookAPI.find, payload)
    if (httpResponseOK(response.status)) {
      yield put(fetchingPhraseByIdSuccess(response.data))
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_FAILURE })
  }
}

function* updatePhrase({ payload }: Effect<TUpdatePhrase>): SagaIterator {
  yield put({ type: ActionTypes.UPDATE_PHRASE_LOADING })
  try {
    const { id, body } = payload
    const response: APIResponseUpdatePhrase = yield call(PhrasebookAPI.update, id, body)
    if (httpResponseOK(response.status)) {
      yield put(udpatePhraseSuccess(response.data))
      yield put(setAlert({ open: true, message: 'Phrase has been update.', severity: 'success' }))
    }
  } catch (e) {
    yield put({ type: ActionTypes.UPDATE_PHRASE_FAILURE })
  }
}

export default function* phrasebookSaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCHING_PHRASEBOOK_REQUESTED, fetchPhraseList)
  yield takeEvery(ActionTypes.FETCHING_PHRASE_BY_ID_REQUESTED, fetchPhrase)
  yield takeLatest(ActionTypes.CREATE_PHRASE_REQUESTED, createPhrase)
  yield takeLatest(ActionTypes.UPDATE_PHRASE_REQUESTED, updatePhrase)
}
