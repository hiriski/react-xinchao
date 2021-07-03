import api from 'src/config/api';

/**
 * Conversation services
 */
class ConversationService {
  /**
   * Get conversation list.
   * @returns {Promise<AxiosResponse<T>>}
   */
  getConversationList = async () => {
    return await api.get('/conversation');
  };

  /**
   * Create conversation.
   * @param { type, participants, message }
   * @returns {Promise<AxiosResponse<T>>}
   */
  createConversation = async ({ type, participants, message }) => {
    return await api.post('/conversation/', { participants, message });
  };

  /**
   * Send first message.
   * @param toUserId
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  sendFirstMessage = async (toUserId, data) => {
    return await api.post('/conversation/send-first-message/' + toUserId, data);
  };

  /**
   * Send message.
   * @param conversationId
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  sendMessage = async (conversationId, data) => {
    return await api.post('/message/' + conversationId, data);
  };

  /**
   * Get messages.
   * @param conversationId
   * @returns {Promise<AxiosResponse<T>>}
   */
  getMessage = async (conversationId) => {
    return await api.get('/message/' + conversationId);
  };
}

export default new ConversationService();
