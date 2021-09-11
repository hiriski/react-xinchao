import * as Actions from './constants';

const initialState = {
  isLoading: false,
  isError: false,
  list: [],
  lastFetched: null,
  currentCategoryTab: {},
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ---------------
     * Fetch phrasebook categories.
     * ---------------
     */
    case Actions.FETCHING_PHRASEBOOK_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.FETCHING_PHRASEBOOK_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.FETCHING_PHRASEBOOK_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload,
        lastFetched: new Date(),
      };
    case Actions.SET_CURRENT_CATEGORY_TAB:
      return {
        ...state,
        currentCategoryTab: payload,
      };
    case Actions.UNSET_CURRENT_CATEGORY_TAB:
      return {
        ...state,
        currentCategoryTab: {},
      };
    default:
      return state;
  }
}
