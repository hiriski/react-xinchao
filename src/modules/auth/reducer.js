import * as Actions from './constants';

const initialState = {
  user: undefined,
  token: undefined,
  isLoading: false,
  isError: false,
  isLoggedOut: false,
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        isError: false,
      };
    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        isError: true,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
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
