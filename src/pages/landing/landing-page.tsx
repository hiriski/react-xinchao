import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { heroBackgroundImage } from './bg'
import CustomButton from '../../components/common/custom-button'
import { PREFIX_APP_VERSION } from '../../utils/constants'

const BackgroundImage: FC = () => (
  <>
    <Box
      sx={{
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundSize: '88%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: `url(${heroBackgroundImage})`,
      }}
    />
    <Box
      sx={{
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundSize: '90%',
        transform: 'rotate(180deg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: `url(${heroBackgroundImage})`,
      }}
    />
  </>
)

const LandingPage: FC = () => {
  const navigate = useNavigate()

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
      <BackgroundImage />
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            mb: 2,
            '& img': {
              width: 162,
              height: 'auto',
            },
          }}
        >
          <img src="/static/images/logo-secondary-with-text.png" alt="Logo" />
        </Box>

        <Box display="flex" alignItems="center">
          <Typography sx={{ fontWeight: '700' }} component="p" variant="h2">
            Speak Vietnamese
          </Typography>
        </Box>
        <Box mt={1} display="flex" alignItems="center">
          <Box mr={1}>
            <Typography sx={{ fontWeight: '700' }} component="span" variant="h2">
              with
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: '700' }} component="span" variant="h2">
              Confidence
            </Typography>
          </Box>
        </Box>

        <Box mt={4}>
          <CustomButton onClick={() => navigate(PREFIX_APP_VERSION)}>Get Started</CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage
