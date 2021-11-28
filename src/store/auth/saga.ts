import type { Effect, SagaIterator } from '@redux-saga/types'
import { AxiosError } from 'axios'
import { SagaReturnType, put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './constants'
import { TRequestLogin, TRequestRegister } from '../../types/auth'
import { IApiResponseError } from '../../types/common'
import { httpResponseCreated, httpResponseOK, httpResponseUnprocessableEntity } from '../../utils/http'
import { saveToken } from '../../utils/tokens'
import AuthAPI from './api'
import { setAlert } from '../alert/actions'
import { setLoginError, setRegisterError } from './actions'

// Type definitions of return of result.
type ApiLoginResponse = SagaReturnType<typeof AuthAPI.login>
type ApiRegisterReponse = SagaReturnType<typeof AuthAPI.register>

export function* login({ payload }: Effect<TRequestLogin>): SagaIterator {
  yield put({ type: ActionTypes.LOGIN_LOADING })
  try {
    const response: ApiLoginResponse = yield call(AuthAPI.login, payload)
    if (httpResponseOK(response.status)) {
      saveToken(response.data.token)
      yield put({ type: ActionTypes.LOGIN_SUCCESS, payload: response.data.user })
    }
  } catch (reason) {
    const error = reason as AxiosError<IApiResponseError>
    if (httpResponseUnprocessableEntity(error.response.status)) {
      // credentials incorrect.
      const { message } = error.response.data
      const payloadError = { status: true, message, messages: [] }
      yield put(setLoginError(payloadError))
      yield put(setAlert({ open: true, message, severity: 'error', autoHideDuration: 5000 }))
    } else {
      // another server error.
      yield put({ type: ActionTypes.LOGIN_FAILURE })
    }
  }
}

function* register({ payload }: Effect<TRequestRegister>): SagaIterator {
  yield put({ type: ActionTypes.REGISTER_LOADING })
  try {
    const response: ApiRegisterReponse = yield call(AuthAPI.register, payload)
    if (httpResponseCreated(response.status)) {
      saveToken(response.data.token)
      yield put({ type: ActionTypes.REGISTER_SUCCESS, payload: response.data.user })
    }
  } catch (reason) {
    const error = reason as AxiosError<IApiResponseError>
    if (error.response.data) {
      const { message, messages } = error.response.data
      const payloadError = { status: true, message, messages }
      yield put(setRegisterError(payloadError))
      // yield put(setAlert({ open: true, message, severity: 'error', autoHideDuration: 5000 }))
    } else {
      yield put({ type: ActionTypes.REGISTER_FAILURE })
    }
  }
}

export default function* authSaga(): SagaIterator {
  yield takeLatest(ActionTypes.LOGIN_REQUESTED, login)
  yield takeLatest(ActionTypes.REGISTER_REQUESTED, register)
}
