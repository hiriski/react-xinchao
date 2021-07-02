import * as Actions from './constants';

const initialState = {
  isLoading: false,
  isFetching: false,
  isSending: false,
  isError: false,
  conversationList: [],
  messages: {}, // object of array.
  userToStartChatting: null,
  responseFirstMessage: null,
  conversation: null,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCHING_CONVERSATION_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_CONVERSATION_LIST_FAILURE:
      return {
        ...state,
        isError: true,
        isFetching: false,
      };
    case Actions.FETCHING_CONVERSATION_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        conversationList: action.payload,
      };
    case Actions.CREATE_CONVERSATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Actions.CREATE_CONVERSATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Actions.CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        conversation: action.payload,
      };
    case Actions.FETCHING_MESSAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case Actions.FETCHING_MESSAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case Actions.FETCHING_MESSAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        messages: {
          ...state.messages,
          ...action.payload,
        },
      };
    case Actions.RESET_FETCHING_MESSAGE:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case Actions.SENDING_FIRST_MESSAGE_REQUEST:
      return {
        ...state,
        isSending: true,
        isError: false,
        responseFirstMessage: null,
      };
    case Actions.SENDING_FIRST_MESSAGE_FAILURE:
      return {
        ...state,
        isSending: false,
        isError: true,
        responseFirstMessage: null,
      };
    case Actions.SENDING_FIRST_MESSAGE_SUCCESS:
      return {
        ...state,
        isSending: false,
        isError: false,
        responseFirstMessage: action.payload,
      };
    case Actions.RESET_SEND_FIRST_MESSAGE:
      return {
        ...state,
        responseFirstMessage: null,
      };

    // Start chatting
    case Actions.SET_USER_TO_START_CHATTING:
      return {
        ...state,
        userToStartChatting: action.payload,
      };
    case Actions.UNSET_USER_TO_START_CHATTING:
      return {
        ...state,
        userToStartChatting: null,
      };
    default:
      return state;
  }
}
