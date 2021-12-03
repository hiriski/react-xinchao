import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Logo } from '../common'
import { APP_NAME } from '../../utils/constants'

const PageLoading: FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1400, // zIndex.snackbar
        top: 0,
        left: 1,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <Logo width={36} height="auto" />

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          '& p': {
            color: 'text.secondary',
          },
        }}
      >
        <Box>
          <Typography component="h4" sx={{ fontWeight: 'bold', fontSize: 20 }}>
            {APP_NAME}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 0.5, alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="subtitle2" component="p">
            Made with
          </Typography>
          <FavoriteIcon sx={{ color: 'red', fontSize: 18, mx: 0.5 }} />
          <Typography variant="subtitle2" component="p">
            Indonesia - Vietnam
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PageLoading
