import React, { FC } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { TPhrase } from '../../types/phrasebook'
import { PhraseItem, PhraseItemSkeleton, PhraseEmpty } from '.'
import { LIMIT } from '../../utils/constants'
import { useAppSelector } from '../../store/hook'

type Props = {
  items: TPhrase[]
  HEADER_HEIGHT: string
}

const PhraseList: FC<Props> = ({ items, HEADER_HEIGHT }: Props) => {
  const { isFetching } = useAppSelector((state) => state.phrasebook)
  return (
    <Container sx={{ pt: HEADER_HEIGHT, mt: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Grid container spacing={1}>
          {isFetching
            ? new Array(LIMIT).fill('.').map((item, index) => (
                <Grid key={String(item + index)} item xs={12} sm={6} md={4}>
                  <PhraseItemSkeleton />
                </Grid>
              ))
            : items.map((item) => (
                <Grid key={String(item.id)} item xs={12} sm={6} md={4}>
                  <PhraseItem item={item} />
                </Grid>
              ))}
        </Grid>
      </Box>
      {!isFetching && items.length === 0 && <PhraseEmpty HEADER_HEIGHT={HEADER_HEIGHT} text="Empty :(" />}
    </Container>
  )
}

export default PhraseList
