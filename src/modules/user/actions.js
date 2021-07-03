import * as Actions from './constants';
import UserService from './service';

/** Get user list */
export const fetchUserList = (limit) => {
  return async (dispatch) => {
    dispatch(fetchingUserListRequest());
    try {
      const response = await UserService.getUsers(limit);
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(fetchingUserListSuccess(data));
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchingUserListFailure());
    }
  };
};

const fetchingUserListRequest = () => ({
  type: Actions.FETCHING_USER_LIST_REQUEST,
});

const fetchingUserListFailure = () => ({
  type: Actions.FETCHING_USER_LIST_FAILURE,
});

const fetchingUserListSuccess = (users) => ({
  type: Actions.FETCHING_USER_LIST_SUCCESS,
  payload: users,
});
