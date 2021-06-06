import axios from 'axios';
import * as Actions from './constants';
import { batch } from 'react-redux';
import { API_URL, USER_TOKEN_KEY } from 'src/constants';
import LocalStorageService from 'src/service/LocalStorage';
import AuthService from './service';

// another actions.
import { showAlert } from '../alert/actions';

// export const setAuthToken = (token) => ({
//   type: Actions.SET_AUTH_TOKEN,
//   payload: token,
// });

/**
 * ------------------------
 * Login action
 * ------------------------
 * */
export const loginRequest = () => ({
  type: Actions.LOGIN_REQUEST,
});

export const loginFailure = (errorMessage) => ({
  type: Actions.LOGIN_FAILURE,
  payload: errorMessage,
});

export const loginSuccess = (data) => ({
  type: Actions.LOGIN_SUCCESS,
  payload: data,
});

export const login = (credentials) => {
  return async (dispatch) => {
    let errMessage = 'Login failed';
    dispatch(loginRequest());
    try {
      const response = await axios.post(API_URL + '/login', credentials);
      if (response.status === 200) {
        let { token } = response.data;
        LocalStorageService.setItem(USER_TOKEN_KEY, token);
        dispatch(loginSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          errMessage = 'Username / Password yang anda masukan salah';
          dispatch(loginFailure(errMessage));
          batch(() => {
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        } else {
          dispatch(loginFailure(errMessage));
        }
      } else {
        dispatch(loginFailure(errMessage));
      }
    }
  };
};

/**
 * ------------------------
 * Register action
 * ------------------------
 * */

export const registerRequest = () => ({
  type: Actions.REGISTER_REQUEST,
});

export const registerFailure = (errorMessage) => ({
  type: Actions.REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerSuccess = (data) => ({
  type: Actions.REGISTER_SUCCESS,
  payload: data,
});

export const register = (userData) => {
  return async (dispatch) => {
    let errMessage = 'Register failed';
    dispatch(registerRequest());
    try {
      const response = await axios.post(API_URL + '/register', userData);
      if (response.status === 201) {
        LocalStorageService.setItem(
          USER_TOKEN_KEY,
          JSON.stringify(response.data),
        );
        dispatch(registerSuccess(response.data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        console.log(e.response);
        if (e.response.status === 422) {
          errMessage = 'Unprocessable entity';
          batch(() => {
            dispatch(registerFailure(errMessage));
            dispatch(
              showAlert({
                message: errMessage,
                severity: 'error',
              }),
            );
          });
        }
      } else {
        batch(() => {
          dispatch(registerFailure(errMessage));
          dispatch(
            showAlert({
              message: errMessage,
              severity: 'error',
            }),
          );
        });
      }
    }
  };
};

/**
 * Fetching authentcated user
 */
export const fetchingAuthenticatedUserRequest = () => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_REQUEST,
});

export const fetchingAuthenticatedUserFailure = (errorMessage) => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_FAILURE,
  payload: errorMessage,
});

export const fetchingAuthenticatedUserSuccess = () => ({
  type: Actions.FETCHING_AUTHENTICATED_USER_SUCCESS,
});

export const fetchAuthenticatedUser = (token) => {
  return (dispatch) => {
    dispatch(fetchingAuthenticatedUserRequest());
    AuthService.getAuthenticatedUser(token)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          batch(() => {
            dispatch(fetchingAuthenticatedUserSuccess());
            dispatch(setUserData(response.data.user));
          });
        } else {
          dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        }
      })
      .catch((e) => {
        dispatch(fetchingAuthenticatedUserFailure('Token is not valid'));
        dispatch(
          showAlert({
            message: 'token is not valid.',
            severity: 'error',
          }),
        );
      });
  };
};
