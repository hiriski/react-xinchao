import * as Actions from './constants';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
  // login: {
  //   isLoading: false,
  //   isSuccess: false,
  //   isError: false,
  //   errorMessage: '',
  // },
  // register: {
  //   isLoading: false,
  //   isSuccess: false,
  //   isError: false,
  //   errorMessage: '',
  // },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        // login: {
        //   isLoading: true,
        //   isSuccess: false,
        //   isError: false,
        //   errorMessage: null,
        // },
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        // login: {
        //   isLoading: false,
        //   isSuccess: false,
        //   isError: true,
        //   errorMessage: action.payload,
        // },
      };
    case Actions.LOGIN_SUCCESS:
      let { token, user } = action.payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        token,
        user,
        // login: {
        //   isLoading: false,
        //   isSuccess: true,
        //   isError: false,
        //   errorMessage: null,
        // },
      };
    case Actions.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        // register: {
        //   isLoading: true,
        //   isSuccess: false,
        //   isError: false,
        //   errorMessage: null,
        // },
      };
    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        // register: {
        //   isLoading: false,
        //   isSuccess: false,
        //   isError: true,
        //   errorMessage: action.payload,
        // },
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        // register: {
        //   isLoading: false,
        //   isSuccess: true,
        //   isError: false,
        //   errorMessage: null,
        // },
      };

    default:
      return state;
  }
}
