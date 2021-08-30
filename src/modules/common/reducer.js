import * as Actions from './constants';

const initialState = {
  isOpenDialogNewConversation: false,
  newConversationType: null,
  isOpenDialogConfirmLogout: false,
  isOpenDialogAddNewPhrase: false,
  isOpenSidebarDrawer: false,
  currentPath: null,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.OPEN_DIALOG_CONFIRM_LOGOUT:
      return {
        ...state,
        isOpenDialogConfirmLogout: true,
      };
    case Actions.CLOSE_DIALOG_CONFIRM_LOGOUT:
      return {
        ...state,
        isOpenDialogConfirmLogout: false,
      };
    case Actions.OPEN_DIALOG_ADD_NEW_PHRASE:
      return {
        ...state,
        isOpenDialogAddNewPhrase: true,
      };
    case Actions.CLOSE_DIALOG_ADD_NEW_PHRASE:
      return {
        ...state,
        isOpenDialogAddNewPhrase: false,
      };
    case Actions.OPEN_DRAWER:
      return {
        ...state,
        isOpenSidebarDrawer: true,
        currentPath: action.payload,
      };
    case Actions.CLOSE_DRAWER:
      return {
        ...state,
        isOpenSidebarDrawer: false,
        currentPath: null,
      };
    case Actions.TOGGLE_DRAWER:
      return {
        ...state,
        isOpenSidebarDrawer: !state.isOpenSidebarDrawer,
      };

    case Actions.OPEN_DIALOG_NEW_CONVERSATION:
      return {
        ...state,
        isOpenDialogNewConversation: true,
        newConversationType: action.payload,
      };
    case Actions.CLOSE_DIALOG_NEW_CONVERSATION:
      return {
        ...state,
        isOpenDialogNewConversation: false,
      };
    default:
      return state;
  }
}
