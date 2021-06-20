import * as Actions from './constants';
import { batch } from 'react-redux';
import AccountService from './service';
import { showAlert } from '../alert/actions';

/**
 * ------------------------
 * Fetch profile.
 * ------------------------
 * */
export const fetchingProfileRequest = () => ({
  type: Actions.FETCHING_PROFILE_REQUEST,
});

export const fetchingProfileFailure = (errorMessage) => ({
  type: Actions.FETCHING_PROFILE_FAILURE,
  payload: errorMessage,
});

export const fetchingProfileSuccess = (data) => ({
  type: Actions.FETCHING_PROFILE_SUCCESS,
  payload: data,
});

export const fetchProfile = () => {
  return async (dispatch) => {
    dispatch(fetchingProfileRequest());
    try {
      const response = await AccountService.profile();
      if (response.status === 200) {
        let { data } = response.data;
        dispatch(fetchingProfileSuccess(data));
      }
    } catch (e) {
      if (e.response !== undefined) {
        if (e.response.status === 422) {
          console.log(e.response);
        }
      }
      batch(() => {
        dispatch(fetchingProfileFailure(errMessage));
        let errMessage = 'Failed to get profile data.';
        dispatch(
          showAlert({
            message: errMessage,
            severity: 'error',
          }),
        );
      });
    }
  };
};
