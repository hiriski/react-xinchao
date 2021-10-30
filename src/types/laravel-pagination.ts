interface ILink {
  url: string
  label: string
  active: boolean
}

export interface ILaravelPaginationMeta {
  // eslint-disable-next-line camelcase
  current_page: number
  from: number
  // eslint-disable-next-line camelcase
  last_page: number
  links: ILink[]
}

export interface ILaravelPagination {
  meta?: ILaravelPaginationMeta
}
