import * as Actions from './constants';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
  isLoggedOut: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.LOGIN_SUCCESS:
      let { token, user } = action.payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Actions.REVOKING_TOKEN_SUCCESS:
      return {
        ...state,
        isLoggedOut: true,
        token: null,
        user: null,
      };
    case Actions.RESET_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
}
