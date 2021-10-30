import React, { FC } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Logo from '../common/logo'
import { APP_NAME } from '../../utils/constants'

const Footer: FC = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
          <Logo width={30} color="secondary" />
          <Typography sx={{ fontWeight: 'bold', ml: 2, fontSize: 24 }}>{APP_NAME}</Typography>
        </Box>

        <Divider />

        {/* Footer text */}
        <Box sx={{ display: 'flex' }}>
          <Typography variant="subtitle2" component="span">
            Build with
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

export default Footer
