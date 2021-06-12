import api from 'src/config/api';

class AuthService {
  login = async (data) => {
    return await api.post('/auth/login', data);
  };
  register = async (data) => {
    return await api.post('/auth/register', data);
  };
  revokeToken = async () => {
    return await api.post('/auth/revoke-token');
  };
}

export default new AuthService();
