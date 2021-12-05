import { AxiosResponse } from 'axios'
import api from '../../utils/http'

import { TProfileUser } from '../../types/account'

const AccountAPI = {
  profile: (): Promise<AxiosResponse<TProfileUser>> => {
    return api.get('/account/profile')
  },
}

export default AccountAPI
