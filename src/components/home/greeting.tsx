import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../store/hook'

const HomeGreeting: FC = () => {
  const { authState, isLoggedIn } = useAppSelector((state) => state.auth)
  return (
    <Box sx={{ py: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component="span" sx={{ mr: 0.75 }}>
          Hello,{' '}
        </Typography>{' '}
        <Typography component="span">{isLoggedIn ? authState.name : 'Stranger'}</Typography>
      </Box>
    </Box>
  )
}

export default HomeGreeting
