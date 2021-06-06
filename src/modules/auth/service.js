import axios from 'axios';
import { API_URL } from 'src/constants';

class AuthService {
  login = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
  };
  register = async (credentials) => {
    return await axios.post(`${API_URL}/register`, credentials);
  };
}

export default new AuthService();
