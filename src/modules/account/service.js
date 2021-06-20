import api from 'src/config/api';

class AccountService {
  /**
   * Get profile data.
   * @returns {Promise<AxiosResponse<T>>}
   */
  profile = async () => {
    return await api.get('/account/profile');
  };
}

export default new AccountService();
