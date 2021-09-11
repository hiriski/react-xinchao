import * as Actions from './constants';
import CategoryService from './service';

/**
 * --------------------
 * Fetch phrasebook categories.
 * --------------------
 */
export const fetchPhrasebookCategories = () => {
  return async (dispatch) => {
    dispatch(fetchPhrasebookCategoriesRequest());
    try {
      const response = await CategoryService.getPhrasebookCategories();
      if (response.status === 200) {
        const items = response.data.data;
        dispatch(fetchingPhrasebookCategorySuccess(items));
      }
    } catch (e) {
      dispatch(fetchingPhrasebookCategoryFailure());
    }
  };
};

const fetchPhrasebookCategoriesRequest = () => ({
  type: Actions.FETCHING_PHRASEBOOK_CATEGORIES_REQUEST,
});

const fetchingPhrasebookCategoryFailure = () => ({
  type: Actions.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE,
});

const fetchingPhrasebookCategorySuccess = (categories) => ({
  type: Actions.FETCHING_PHRASEBOOK_CATEGORIES_SUCCESS,
  payload: categories,
});

/**  Category tab */
export const setCurrentCategoryTab = (payload) => ({
  type: Actions.SET_CURRENT_CATEGORY_TAB,
  payload,
});
export const unsetCurrentCategoryTab = () => ({
  type: Actions.UNSET_CURRENT_CATEGORY_TAB,
});
