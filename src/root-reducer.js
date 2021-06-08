import { combineReducers } from 'redux';
import authReducer from 'src/modules/auth/reducer';
import alertReducer from 'src/modules/alert/reducer';
import categoryReducer from 'src/modules/category/reducer';
import phrasebookReducer from 'src/modules/phrasebook/reducer';

export default combineReducers({
  authReducer,
  alertReducer,
  categoryReducer,
  phrasebookReducer,
});
