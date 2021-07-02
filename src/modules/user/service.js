import api from 'src/config/api';
/**
 * User services
 */

class UserService {
  /**
   * Get users.
   * @param limit
   * @returns {Promise<AxiosResponse<T>>}
   */
  getUsers = async (limit) => {
    return limit !== null
      ? await api.get('/user?limit=' + limit)
      : await api.get('user');
  };
}

export default new UserService();
