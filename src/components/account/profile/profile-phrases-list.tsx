import React, { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { LIMIT } from '../../../utils/constants'
import { useAppSelector } from '../../../store/hook'
import { PhraseItem, PhraseItemSkeleton, PhraseEmpty } from '../../phrasebook'

const ProfilePhrasesList: FC = () => {
  const { isFetching, data } = useAppSelector((state) => state.account.phrases)
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography component="h3" variant="h5">
            Phrases by me
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {isFetching
            ? new Array(LIMIT).fill('.').map((item, index) => (
                <Grid key={String(item + index)} item xs={12} sm={6} md={4}>
                  <PhraseItemSkeleton />
                </Grid>
              ))
            : data.map((item) => (
                <Grid key={String(item.id)} item xs={12} sm={6} md={4}>
                  <PhraseItem item={item} />
                </Grid>
              ))}
        </Grid>
      </Box>
      {!isFetching && data.length === 0 && <PhraseEmpty text="Empty :(" />}
    </>
  )
}

export default ProfilePhrasesList
