import * as Actions from './constants';

const initialState = {
  create: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  list: [], // all of phrasebooks.
};

export default function phrasebookReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ---------------
     * Create Phrase
     * ---------------
     */
    case Actions.CREATE_PHRASE_REQUEST:
      return {
        ...state,
        create: {
          isError: false,
          isLoading: true,
          isSuccess: false,
        },
      };
    case Actions.CREATE_PHRASE_FAILURE:
      return {
        ...state,
        create: {
          isError: true,
          isLoading: false,
          isSuccess: false,
        },
      };
    case Actions.CREATE_PHRASE_SUCCESS:
      return {
        ...state,
        create: {
          isError: false,
          isLoading: false,
          isSuccess: true,
        },
      };
    case Actions.RESET_CREATE_PHRASE_STATE:
      return {
        ...state,
        create: initialState.create,
      };

    /**
     * ---------------
     * Fetch phrasebooks.
     * ---------------
     */
    case Actions.FETCHING_PHRASEBOOKS_REQUEST:
      return state;
    case Actions.FETCHING_PHRASEBOOKS_FAILURE:
      return state;
    case Actions.FETCHING_PHRASEBOOKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.RESET_FETCHING_PHRASEBOOKS_STATE:
      return state;

    default:
      return state;
  }
}
