import type { Effect, SagaIterator } from '@redux-saga/types'
import { AxiosError, AxiosResponse } from 'axios'
import { SagaReturnType, put, call, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from './constants'
import { TRequestLogin, TRequestLoginWithSocialAccount, TRequestRegister } from '../../types/auth'
import { IApiResponseError } from '../../types/common'
import { httpResponseCreated, httpResponseOK, httpResponseUnprocessableEntity } from '../../utils/http'
import { removeToken, saveToken } from '../../utils/tokens'
import AuthAPI from './api'
import { setAlert } from '../alert/actions'
import { loginWithSocialAccountSuccess, setLoginError, setRegisterError } from './actions'

// Type definitions of return of result.
type ApiLoginResponse = SagaReturnType<typeof AuthAPI.login>
type ApiRegisterReponse = SagaReturnType<typeof AuthAPI.register>
type ApiLoginWithSocialAccountResponse = SagaReturnType<typeof AuthAPI.loginWithSocialAcccount>

function* login({ payload }: Effect<TRequestLogin>): SagaIterator {
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

function* loginWithSocialAccount({ payload }: Effect<TRequestLoginWithSocialAccount>): SagaIterator {
  yield put({ type: ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_LOADING })
  try {
    const response: ApiLoginWithSocialAccountResponse = yield call(AuthAPI.loginWithSocialAcccount, payload)
    if (httpResponseOK(response.status)) {
      saveToken(response.data.token)
      yield put(loginWithSocialAccountSuccess(response.data.provider, response.data.user))
    }
  } catch (reason) {
    // const error = reason as AxiosError<IApiResponseError>
    yield put(setAlert({ open: true, message: 'Login failed', severity: 'error', autoHideDuration: 5000 }))
    yield put({ type: ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE })
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

function* revokeToken(): SagaIterator {
  yield put({ type: ActionTypes.REVOKE_TOKEN_LOADING })
  try {
    const response: AxiosResponse = yield call(AuthAPI.revokeToken)
    if (httpResponseOK(response.status)) {
      removeToken()
      yield put({ type: ActionTypes.REVOKE_TOKEN_SUCCESS })
      yield put({ type: ActionTypes.RESET_AUTH_STATE })
    }
  } catch (reason) {
    removeToken()
    // const error = reason as AxiosError<IApiResponseError>
    yield put({ type: ActionTypes.REVOKE_TOKEN_FAILURE })
    yield put({ type: ActionTypes.RESET_AUTH_STATE })
  }
}

export default function* authSaga(): SagaIterator {
  yield takeLatest(ActionTypes.LOGIN_REQUESTED, login)
  yield takeLatest(ActionTypes.REGISTER_REQUESTED, register)
  yield takeLatest(ActionTypes.LOGIN_WITH_SOCIAL_ACCOUNT_REQUESTED, loginWithSocialAccount)
  yield takeLatest(ActionTypes.REVOKE_TOKEN_REQUESTED, revokeToken)
}
