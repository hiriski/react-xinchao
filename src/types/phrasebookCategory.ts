export type TPhrasebookCategoryColor = {
  id: number
  value?: string
}

export type TPhrasebookCategoryText = {
  id?: string
  vi?: string
  en?: string
  description?: string
}

export type TPhrasebookCategory = {
  id: number
  color?: TPhrasebookCategoryColor
  icon_name?: string
  icon_type?: string
  slug: string
  phrases_count: number
  text: TPhrasebookCategoryText
}
