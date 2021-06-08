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
  getPhrasebooks = async (categoryId) => {
    const response = await api.get(
      categoryId ? '/phrasebook?category_id=' + categoryId : '/phrasebook',
    );
    return response;
  };
}

export default new PhrasebookService();
