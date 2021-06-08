import PhrasebookService from './service';
import * as Actions from './constants';

/**
 * --------------------
 * Create phrasebook
 * --------------------
 */
export const createPhrase = (data) => {
  return async (dispatch) => {
    dispatch(createPhraseRequest());
    try {
      const response = await PhrasebookService.create(data);
      if (response.status === 201) {
        dispatch(createPhraseSuccess(response.data.data));
      }
    } catch (e) {
      dispatch(createPhraseFailure());
      console.log(e.response);
    }
  };
};

const createPhraseRequest = () => ({
  type: Actions.CREATE_PHRASE_REQUEST,
});

const createPhraseFailure = () => ({
  type: Actions.CREATE_PHRASE_FAILURE,
});

const createPhraseSuccess = (newPhrasebook) => ({
  type: Actions.CREATE_PHRASE_SUCCESS,
  payload: newPhrasebook,
});

export const resetCreatePhrase = () => ({
  type: Actions.RESET_CREATE_PHRASE_STATE,
});

/**
 * --------------------
 * Fetch phrasebook
 * --------------------
 */
export const fetchPhrasebooks = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchingPhrasebooksRequest());
    try {
      const response = await PhrasebookService.getPhrasebooks(categoryId);
      if (response.status === 200) {
        const items = response.data.data;
        dispatch(fetchingPhrasebookSuccess(items));
      }
    } catch (e) {
      dispatch(fetchingPhrasebookFailure());
    }
  };
};

const fetchingPhrasebooksRequest = () => ({
  type: Actions.FETCHING_PHRASEBOOKS_REQUEST,
});

const fetchingPhrasebookFailure = () => ({
  type: Actions.FETCHING_PHRASEBOOKS_FAILURE,
});

const fetchingPhrasebookSuccess = (phrasebooks) => ({
  type: Actions.FETCHING_PHRASEBOOKS_SUCCESS,
  payload: phrasebooks,
});

export const resetFetchPhrasebooks = () => ({
  type: Actions.RESET_FETCHING_PHRASEBOOKS_STATE,
});
