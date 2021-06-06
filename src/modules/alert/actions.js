import { batch } from 'react-redux';
import * as Actions from './constants';

export const showAlert =
  ({ message, severity = 'success', autoHideDuration = 5000 }) =>
  (dispatch) => {
    batch(() => {
      dispatch({
        type: Actions.SET_ALERT,
        payload: {
          message,
          severity,
          autoHideDuration,
        },
      });
      dispatch({
        type: Actions.SHOW_ALERT,
      });
    });
  };

export const hideAlert = () => (dispatch) => {
  batch(() => {
    dispatch({
      type: Actions.HIDE_ALERT,
    });
    dispatch({
      type: Actions.UNSET_ALERT,
    });
  });
};

export const toggleAlert = () => ({
  type: Actions.TOGGLE_ALERT,
});
