import { TrainRounded } from '@material-ui/icons';
import * as Actions from './constants';

const initialState = {
  isFetching: false,
  isFailure: false,
  create: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
  list: [], // all of phrasebooks.
  newPhrases: [],
  category: null,
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
      return {
        ...state,
        isFetching: true,
        isFailure: false,
      };
    case Actions.FETCHING_PHRASEBOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
      };
    case Actions.FETCHING_PHRASEBOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        list: action.payload.phrasebooks || [], // all of phrasebooks.
        category: action.payload.category || null,
      };
    case Actions.RESET_FETCHING_PHRASEBOOKS_STATE:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        list: [],
        category: null,
      };

    /**
     * ---------------
     * Fetch latest phrasebooks.
     * ---------------
     */
    case Actions.FETCHING_LATEST_PHRASEBOOK_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailure: false,
      };
    case Actions.FETCHING_LATEST_PHRASEBOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
      };
    case Actions.FETCHING_LATEST_PHRASEBOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        newPhrases: action.payload,
      };

    default:
      return state;
  }
}
