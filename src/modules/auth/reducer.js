import * as Actions from './constants';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
  isRegisterSuccess: false,
  isLoginSuccess: false,
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
        isLoginSuccess: true,
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
        isRegisterSuccess: true,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      return state;
  }
}
