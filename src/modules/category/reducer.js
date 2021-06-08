import * as Actions from './constants';

const initialState = {
  isLoading: false,
  isError: false,
  list: [],
  lastFetched: null,
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
    default:
      return state;
  }
}
