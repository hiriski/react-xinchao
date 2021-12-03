import React, { FC } from 'react'
import { Box, Skeleton } from '@mui/material'

const PhraseItemSkeleton: FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <Skeleton variant="rectangular" animation="wave" width="100%" height={100} />
    </Box>
  )
}

export default PhraseItemSkeleton
