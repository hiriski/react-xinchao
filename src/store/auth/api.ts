import { AxiosResponse } from 'axios'
import api from '../../utils/http'
import {
  TLoginUser,
  TRequestLoginWithSocialAccount,
  TRegisterUser,
  TRequestLogin,
  TRequestRegister,
  TLoginWithSocialAccount,
} from '../../types/auth'

const AuthAPI = {
  register: (data: TRequestRegister): Promise<AxiosResponse<TRegisterUser>> => {
    return api.post('/auth/register', data)
  },

  login: (data: TRequestLogin): Promise<AxiosResponse<TLoginUser>> => {
    return api.post('/auth/login', data)
  },

  revokeToken: (): Promise<AxiosResponse> => {
    return api.post('/auth/revoke-token')
  },

  user: (): Promise<AxiosResponse> => {
    return api.get('/auth/user')
  },

  loginWithSocialAcccount: (data: TRequestLoginWithSocialAccount): Promise<AxiosResponse<TLoginWithSocialAccount>> => {
    return api.post('/auth/social', data)
  },
}

export default AuthAPI
