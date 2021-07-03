import * as Actions from './constants';

export const openDialogPhrasebookDetails = (phrasebook) => ({
  type: Actions.OPEN_DIALOG_PHRASEBOOK_DETAILS,
  payload: phrasebook,
});

export const closeDialogPhrasebookDetails = () => ({
  type: Actions.CLOSE_DIALOG_PHRASEBOOK_DETAILS,
});

export const toggleDialogPhrasebookDetails = () => ({
  type: Actions.TOGGLE_DIALOG_PHRASEBOOK_DETAILS,
});

export const openDrawer = (currentPath) => ({
  type: Actions.OPEN_DRAWER,
  payload: currentPath,
});

export const closeDrawer = () => ({
  type: Actions.CLOSE_DRAWER,
});

export const toggleDrawer = () => ({
  type: Actions.TOGGLE_DRAWER,
});

export const openDialogConfirmLogout = () => ({
  type: Actions.OPEN_DIALOG_CONFIRM_LOGOUT,
});

export const closeDialogConfirmLogout = () => ({
  type: Actions.CLOSE_DIALOG_CONFIRM_LOGOUT,
});

export const openDialogAddNewPhrase = () => ({
  type: Actions.OPEN_DIALOG_ADD_NEW_PHRASE,
});

export const closeDialogAddNewPhrase = () => ({
  type: Actions.CLOSE_DIALOG_ADD_NEW_PHRASE,
});

export const openDialogNewConversation = (type) => ({
  type: Actions.OPEN_DIALOG_NEW_CONVERSATION,
  payload: type,
});

export const closeDialogNewConversation = () => ({
  type: Actions.CLOSE_DIALOG_NEW_CONVERSATION,
});
