import React, { FC } from 'react'
import { Box } from '@mui/material'

const NotFound: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      NotFound
    </Box>
  )
}

export default NotFound
