import { createSelector } from 'reselect';

const rootSelector = (state) => state.authReducer;

export const isAuthSelector = createSelector(rootSelector, (state) => {
  if (state.isLoggedIn && state.token && state.user) {
    return true;
  } else {
    return false;
  }
});
