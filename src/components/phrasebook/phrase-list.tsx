import React, { FC } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { TPhrase } from '../../types/phrasebook'
import { PhraseItem, PhraseEmpty } from '.'

type Props = {
  items: TPhrase[]
  HEADER_HEIGHT: string
}

const PhraseList: FC<Props> = ({ items, HEADER_HEIGHT }: Props) => {
  return items.length > 0 ? (
    <Container sx={{ pt: HEADER_HEIGHT, mt: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Grid container spacing={1}>
          {items.map((item) => (
            <Grid key={String(item.id)} item xs={12} sm={6} md={4}>
              <PhraseItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  ) : (
    <PhraseEmpty HEADER_HEIGHT={HEADER_HEIGHT} text="Empty :(" />
  )
}

export default PhraseList
