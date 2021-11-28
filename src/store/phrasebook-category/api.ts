import { AxiosResponse } from 'axios'
import api from '../../utils/http'

import { TPhrasebookCategory } from '../../types/phrasebookCategory'

export interface IResponsePhrasebookCategory {
  data: TPhrasebookCategory[]
}

const PhrasebookCategoryAPI = {
  findAll: async (): Promise<AxiosResponse<IResponsePhrasebookCategory>> => {
    return api.get('/phrasebook/category')
  },
}

export default PhrasebookCategoryAPI
