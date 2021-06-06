import * as Actions from './constants';

const AUTOHIDE_DURATION = 3200;
const initialState = {
  show: false,
  message: null,
  autoHideDuration: AUTOHIDE_DURATION,
  severity: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.UNSET_ALERT:
      return {
        ...state,
        message: '',
        autoHideDuration: AUTOHIDE_DURATION,
        severity: '',
      };
    case Actions.SHOW_ALERT:
      return {
        ...state,
        show: true,
      };
    case Actions.HIDE_ALERT:
      return {
        ...state,
        show: false,
      };
    case Actions.TOGGLE_ALERT:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};
