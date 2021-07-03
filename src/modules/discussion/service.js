import api from 'src/config/api';

class DiscussionReducer {
  /**
   * Create discusstion post.
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  create = async (data) => {
    return await api.post('discussion', data);
  };

  /**
   * Get all discussions post.
   * @returns {Promise<AxiosResponse<T>>}
   */
  getDiscussion = async () => {
    return await api.get('/discussion');
  };
}

export default new DiscussionReducer();
