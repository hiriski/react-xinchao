import * as Actions from './constants';

const initialState = {
  isOpenDialogPhrasebookDetails: false,
  isOpenDialogConfirmLogout: false,
  isOpenSidebarDrawer: false,
  currentPath: null,
  phrasebook: null,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.OPEN_DIALOG_PHRASEBOOK_DETAILS:
      return {
        ...state,
        isOpenDialogPhrasebookDetails: true,
        phrasebook: action.payload,
      };
    case Actions.CLOSE_DIALOG_PHRASEBOOK_DETAILS:
      return {
        ...state,
        isOpenDialogPhrasebookDetails: false,
        phrasebook: null,
      };
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
    case Actions.TOGGLE_DIALOG_PHRASEBOOK_DETAILS:
      return {
        ...state,
        isOpenDialogPhrasebookDetails: !state.isOpenDialogPhrasebookDetails,
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
    default:
      return state;
  }
}
