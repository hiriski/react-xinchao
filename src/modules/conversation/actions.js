import * as Actions from './constants';
import ConversationService from './service';

/**
 * Fetching conversaiton list.
 * @returns {function(...[*]=)}
 */
export const fetchConversationList = () => {
  return async (dispatch) => {
    dispatch(fetchingConversationListRequest());
    try {
      const response = await ConversationService.getConversationList();
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(fetchingConversationListSuccess(data));
      }
    } catch (e) {
      dispatch(fetchingConversationListFailure());
    }
  };
};

const fetchingConversationListRequest = () => ({
  type: Actions.FETCHING_CONVERSATION_LIST_REQUEST,
});

const fetchingConversationListFailure = () => ({
  type: Actions.FETCHING_CONVERSATION_LIST_FAILURE,
});

const fetchingConversationListSuccess = (conversations) => ({
  type: Actions.FETCHING_CONVERSATION_LIST_SUCCESS,
  payload: conversations,
});

/**
 * Create conversation.
 * @param { type, participants, message }
 * @returns {function(...[*]=)}
 */
export const createConversation = ({
  type = 'private',
  participants,
  message = null,
}) => {
  return async (dispatch) => {
    dispatch(createConversationRequest());
    try {
      const response = await ConversationService.createConversation({
        type,
        participants,
        message,
      });
      console.log(response);
      if (response.status === 201) {
        const { data } = response.data;
        dispatch(createConverstionSuccess(data));
      }
    } catch (e) {
      dispatch(createConversationFailure());
    }
  };
};

const createConversationRequest = () => ({
  type: Actions.CREATE_CONVERSATION_REQUEST,
});

const createConversationFailure = () => ({
  type: Actions.CREATE_CONVERSATION_FAILURE,
});

const createConverstionSuccess = (conversation) => ({
  type: Actions.CREATE_CONVERSATION_SUCCESS,
  payload: conversation,
});

/**
 * Fetch message.
 * @param conversationId
 * @returns {function(...[*]=)}
 */
export const fetchMessages = (conversationId) => {
  return async (dispatch) => {
    dispatch(fetchingMessageRequest());
    try {
      const response = await ConversationService.getMessage(conversationId);
      if (response.status === 200) {
        const messages = response.data.data;
        dispatch(fetchMessageSuccess(conversationId, messages));
      }
    } catch (e) {
      dispatch(fetchingMessageFailure());
      console.log(e);
    }
  };
};

const fetchingMessageRequest = () => ({
  type: Actions.FETCHING_MESSAGE_REQUEST,
});

const fetchingMessageFailure = () => ({
  type: Actions.FETCHING_MESSAGE_FAILURE,
});

const fetchMessageSuccess = (conversationId, messages) => ({
  type: Actions.FETCHING_MESSAGE_SUCCESS,
  payload: {
    ['conversation_id_' + conversationId]: messages,
  },
});

export const resetFetchingMessage = () => ({
  type: Actions.RESET_FETCHING_MESSAGE,
});

/**
 * Send message
 * @param conversationId
 * @param data
 * @returns {function(...[*]=)}
 */
export const sendMessage = (conversationId, data) => {
  return async (dispatch) => {
    dispatch(sendingMessageRequest());
    try {
      const response = await ConversationService.sendMessage(
        conversationId,
        data,
      );
      if (response.status === 201) {
        dispatch(
          sendingMessageSuccess(conversationId, 'Message has been send!'),
        );
      }
    } catch (e) {
      dispatch(sendingMessageFailure());
    }
  };
};

export const sendingMessageRequest = () => ({
  type: Actions.SENDING_MESSAGE_REQUEST,
});

const sendingMessageSuccess = (conversationId, message) => ({
  type: Actions.SENDING_MESSAGE_SUCCESS,
  payload: {},
});

const sendingMessageFailure = () => ({
  type: Actions.SENDING_MESSAGE_FAILURE,
});

/**
 * Send first private message.
 * @param toUserId
 * @param data
 * @returns {function(...[*]=)}
 */
export const sendFirstMessage = (toUserId, data) => {
  return async (dispatch) => {
    dispatch(sendingFirstMessageRequest());
    try {
      const response = await ConversationService.sendFirstMessage(
        toUserId,
        data,
      );
      /**
       * Sample response from server.
       "data": {
          "id": 1,
          "channel_id": "xME_1620998819",
          "conversation_type": "private",
          "last_message": {
                "_id": 1,
                "text": null,
                "user": {
                    "_id": 1,
                    "name": "Riski",
                    "avatar": "http://apixinchao.riski.me/storage/images/users/4yearsago.jpg"
                },
                "send": true,
                "received": true,
                "createdAt": "2021-05-14T13:26:59.000000Z"
            }
          }
       */
      if (response.status === 201) {
        const { data } = response.data;
        dispatch(sendingFirstMessageSuccess(data));
      }
    } catch (e) {
      dispatch(sendingFirstMessageFailure('Failed to sending first message!'));
    }
  };
};

const sendingFirstMessageRequest = () => ({
  type: Actions.SENDING_FIRST_MESSAGE_REQUEST,
});

const sendingFirstMessageFailure = (message = '') => ({
  type: Actions.SENDING_FIRST_MESSAGE_FAILURE,
  payload: message,
});

export const sendingFirstMessageSuccess = (data) => ({
  type: Actions.SENDING_FIRST_MESSAGE_SUCCESS,
  payload: data,
});

export const resetSendFirstMessage = () => ({
  type: Actions.RESET_SEND_FIRST_MESSAGE,
});

// Start chatting.
export const setUserToStartChatting = (userObject) => ({
  type: Actions.SET_USER_TO_START_CHATTING,
  payload: userObject,
});
export const unsetUserToStartChatting = () => ({
  type: Actions.UNSET_USER_TO_START_CHATTING,
});

// common.
export const mergeMessage = (data) => ({
  type: Actions.MERGE_MESSAGE,
  payload: data,
});
