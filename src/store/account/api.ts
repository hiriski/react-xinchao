import { AxiosResponse } from 'axios'
import api from '../../utils/http'

import { TProfileUser } from '../../types/account'
import { TPhrase } from '../../types/phrasebook'

const AccountAPI = {
  // get profile info
  profile: (): Promise<AxiosResponse<TProfileUser>> => {
    return api.get('/account/profile')
  },

  // get all phrases by auth user.
  phrases: (): Promise<AxiosResponse<TPhrase[]>> => {
    return api.get('/account/phrases')
  },
}

export default AccountAPI
