import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isError: false,
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_USER_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case Actions.FETCHING_USER_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        users: action.payload,
      };
    default:
      return state;
  }
}
