import api from 'src/config/api';

class CategoryService {
  /**
   *
   * Get all phrasebook categories.
   * @params {object} data
   * @returns {*}
   */
  getPhrasebookCategories = async () => {
    return await api.get('phrasebook/category');
  };
}

export default new CategoryService();
