import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isFailure: false,
  isLoading: false,
  postSuccess: false,
  list: [], // all of discussions.
};

export default function discussionReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ---------------
     * Create discussion.
     * ---------------
     */
    case Actions.CREATE_DISCUSSION_REQUEST:
      return {
        ...state,
        isFailure: false,
        isLoading: true,
        postSuccess: false,
      };
    case Actions.CREATE_DISCUSSION_FAILURE:
      return {
        ...state,
        isFailure: true,
        isLoading: false,
        postSuccess: false,
      };
    case Actions.CREATE_DISCUSSION_SUCCESS:
      return {
        ...state,
        isFailure: false,
        isLoading: false,
        postSuccess: true,
      };
    case Actions.RESET_CREATE_DISCUSSION_STATE:
      return {
        ...state,
        isFailure: false,
        isLoading: false,
        postSuccess: false,
      };

    /**
     * ---------------
     * Fetch discussion list.
     * ---------------
     */
    case Actions.FETCHING_DISCUSSION_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailure: false,
      };
    case Actions.FETCHING_DISCUSSION_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
      };
    case Actions.FETCHING_DISCUSSION_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        list: action.payload,
      };

    default:
      return state;
  }
}
