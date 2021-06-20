import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isLoading: false,
  isError: false,
  profile: null,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case Actions.FETCHING_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        profile: action.payload,
      };

    default:
      return state;
  }
}
