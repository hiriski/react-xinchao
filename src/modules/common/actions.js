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

export const openDrawer = () => ({
  type: Actions.OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: Actions.CLOSE_DRAWER,
});

export const toggleDrawer = () => ({
  type: Actions.TOGGLE_DRAWER,
});
