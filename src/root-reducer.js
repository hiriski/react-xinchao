import { combineReducers } from 'redux';
import authReducer from 'src/modules/auth/reducer';
import alertReducer from 'src/modules/alert/reducer';
import categoryReducer from 'src/modules/category/reducer';
import phrasebookReducer from 'src/modules/phrasebook/reducer';
import commonReducer from 'src/modules/common/reducer';
import accountReducer from 'src/modules/account/reducer';
import discussionReducer from 'src/modules/discussion/reducer';
import userReducer from 'src/modules/user/reducer';
import conversationReducer from 'src/modules/conversation/reducer';

export default combineReducers({
  authReducer,
  alertReducer,
  categoryReducer,
  phrasebookReducer,
  commonReducer,
  accountReducer,
  discussionReducer,
  userReducer,
  conversationReducer,
});
