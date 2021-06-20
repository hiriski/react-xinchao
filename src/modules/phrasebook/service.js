import api from 'src/config/api';

class PhrasebookService {
  /**
   * Create phrases.
   * @param data
   * @returns {Promise<AxiosResponse<T>>}
   */
  create = async (data) => {
    return await api.post('phrasebook', data);
  };

  /**
   * Get phrasebooks.
   * @param categoryId
   * @returns {Promise<AxiosResponse<T>>}
   */
  getPhrasebooks = async (category) => {
    return category
      ? await api.get('/phrasebook?category=' + category)
      : await api.get('/phrasebook');
  };

  /**
   * Get phrasebooks.
   * @param categoryId
   * @returns {Promise<AxiosResponse<T>>}
   */
  getLatestPhrasebook = async (count) => {
    return await api.get(`/phrasebook?latest=${count}`);
  };
}

export default new PhrasebookService();
