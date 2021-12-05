import type { SagaIterator } from '@redux-saga/types'
import { SagaReturnType, put, call, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from './constants'
import { httpResponseOK } from '../../utils/http'
import AccountAPI from './api'
import { setAlert } from '../alert/actions'
import { fetchingProfileSuccess } from './actions'

// Type definitions of return of result.
type APIProfileResponse = SagaReturnType<typeof AccountAPI.profile>

function* fetchProfile(): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_PROFILE_LOADING })
  try {
    const response: APIProfileResponse = yield call(AccountAPI.profile)
    if (httpResponseOK(response.status)) {
      yield put(fetchingProfileSuccess(response.data))
    }
  } catch (reason) {
    // const error = reason as AxiosError<IApiResponseError>
    yield put({ type: ActionTypes.FETCHING_PROFILE_FAILURE })
    yield put(setAlert({ open: true, message: 'Failed to fetch profile', severity: 'error' }))
  }
}

export default function* accountSaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCHING_PROFILE_REQUESTED, fetchProfile)
}
