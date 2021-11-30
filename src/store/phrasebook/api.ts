import { AxiosResponse } from 'axios'
import api from '../../utils/http'

import { TPhrase } from '../../types/phrasebook'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'

export interface IResponsePhrasebook {
  phrases: TPhrase[]
  category: TPhrasebookCategory
}

const PhrasebookAPI = {
  findAllByCategory: async (category: string): Promise<AxiosResponse<IResponsePhrasebook>> => {
    const params = { category }
    return api.get(`/phrasebook`, { params })
  },
}

export default PhrasebookAPI
