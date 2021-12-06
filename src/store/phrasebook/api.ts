import { AxiosResponse } from 'axios'
import api from '../../utils/http'

import { TPhrase, TCreatePhrase } from '../../types/phrasebook'
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
  create: async (body: TCreatePhrase): Promise<AxiosResponse<TPhrase>> => {
    return api.post(`/phrasebook`, body)
  },
  update: async (id: number, body: TCreatePhrase): Promise<AxiosResponse<TPhrase>> => {
    return api.put(`/phrasebook/${id}`, body)
  },
}

export default PhrasebookAPI
