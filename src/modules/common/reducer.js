import * as Actions from './constants';

const initialState = {
  isOpenDialogPhrasebookDetails: false,
  openDrawer: false,
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
    case Actions.TOGGLE_DIALOG_PHRASEBOOK_DETAILS:
      return {
        ...state,
        isOpenDialogPhrasebookDetails: !state.isOpenDialogPhrasebookDetails,
      };
    case Actions.OPEN_DRAWER:
      return {
        ...state,
        openDrawer: true,
      };
    case Actions.CLOSE_DRAWER:
      return {
        ...state,
        openDrawer: false,
      };
    case Actions.TOGGLE_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    default:
      return state;
  }
}
