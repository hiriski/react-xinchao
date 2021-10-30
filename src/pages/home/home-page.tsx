import React, { FC } from 'react'
import { Box } from '@mui/material'

const HomePage: FC = () => {
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
      Homepage
    </Box>
  )
}

export default HomePage
