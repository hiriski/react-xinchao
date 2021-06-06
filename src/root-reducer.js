import { combineReducers } from 'redux';
import authReducer from 'src/modules/auth/reducer';
import alertReducer from 'src/modules/alert/reducer';

export default combineReducers({
  authReducer,
  alertReducer,
});
