import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'
import { PhrasebookCategoryEmpty, PhrasebookCategoryItem, PhrasebookCategoryItemSkeleton } from '.'
import { useAppSelector } from '../../store/hook'

type Props = {
  items: TPhrasebookCategory[]
}

const PhrasebookCategoryList: FC<Props> = ({ items }: Props) => {
  const { isFetching } = useAppSelector((state) => state.phrasebookCategory)
  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Grid container spacing={2}>
          {isFetching
            ? new Array(9).fill('.').map((item, index) => (
                <Grid key={String(item + index)} item xs={12} sm={6} md={4}>
                  <PhrasebookCategoryItemSkeleton />
                </Grid>
              ))
            : items.map(({ id, slug, text, phrases_count, color }) => (
                <Grid key={String(id)} item xs={12} sm={6} md={4}>
                  <PhrasebookCategoryItem id={id} slug={slug} text={text} phrasesCount={phrases_count} color={color} />
                </Grid>
              ))}
        </Grid>
      </Box>
      {!isFetching && items.length === 0 && <PhrasebookCategoryEmpty text="Empty :(" />}
    </Container>
  )
}

export default PhrasebookCategoryList
