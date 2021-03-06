// Import the redux-saga/effects
import type { SagaIterator } from '@redux-saga/types'
import { SagaReturnType, put, call, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from './constants'

// Import all api's
import PhrasebookCategoryAPI from './api'
import { httpResponseOK } from '../../utils/http'
import { setAlert } from '../alert/actions'
import { fetchingPhrasebookCategorySuccess } from './actions'

// Type definitions of return of result.
type APIPhrasebookCategoryResponse = SagaReturnType<typeof PhrasebookCategoryAPI.findAll>

function* fetchPhrasebookCategories(): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_LOADING })
  try {
    const response: APIPhrasebookCategoryResponse = yield call(PhrasebookCategoryAPI.findAll)
    if (httpResponseOK(response.status)) {
      const categories = response.data.data
      yield put(fetchingPhrasebookCategorySuccess(categories))
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE })
    yield put(
      setAlert({
        open: true,
        message: 'Failed to fetch phrasebook category',
        severity: 'error',
      })
    )
  }
}

export default function* phrasebookCategorySaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCHING_PHRASEBOOK_CATEGORIES_REQUESTED, fetchPhrasebookCategories)
}
