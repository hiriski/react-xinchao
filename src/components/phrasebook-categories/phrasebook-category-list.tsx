import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { TPhrasebookCategory } from '../../types/phrasebookCategory'
import { PhrasebookCategoryItem } from '.'

type Props = {
  items: TPhrasebookCategory[]
}

const PhrasebookCategoryList: FC<Props> = ({ items }: Props) => {
  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {Array.isArray(items) && items.length > 0 ? (
          <Grid container spacing={2}>
            {items.map(({ id, slug, text, phrases_count, color }) => (
              <Grid key={String(id)} item xs={12} sm={6} md={4}>
                <PhrasebookCategoryItem id={id} slug={slug} text={text} phrasesCount={phrases_count} color={color} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>Catgeory empty</Typography>
        )}
      </Box>
    </Container>
  )
}

export default PhrasebookCategoryList
