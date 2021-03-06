import React, { FC, ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useAppSelector } from '../../store/hook'
import { getProfilePhoto, hasProfilePhoto } from '../../utils/profile'
import { ROUTES } from '../../utils/constants'

const HomeGreeting: FC = () => {
  const AVATAR_SIZE = 46
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)

  const renderLoginButton = (): ReactElement => (
    <Box sx={{ ml: 'auto' }}>
      <Button startIcon={<AccountCircle />} component={RouterLink} to={ROUTES.SIGNIN}>
        Sign In
      </Button>
    </Box>
  )

  const renderProfilePhoto = (profilePhoto?: string, name?: string): ReactElement =>
    isAuthenticated &&
    user && (
      <Box
        sx={{
          mr: 3,
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderRadius: AVATAR_SIZE,
          overflow: 'hidden',
          '& img': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        {!profilePhoto ? <img src="/static/images/user.png" alt={name} /> : <img src={profilePhoto} alt={name} />}
      </Box>
    )

  return (
    <Container>
      <Box sx={{ mt: 3, mb: 5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          {hasProfilePhoto(user) ? renderProfilePhoto(getProfilePhoto(user), user.name) : renderProfilePhoto(null)}
          <Box>
            <Typography color="text.secondary" component="p" variant="subtitle2" sx={{ mb: 0.2 }}>
              {isAuthenticated && user ? 'Welcome back,' : 'Hello,'}
            </Typography>
            <Typography component="h4" variant="h5">
              {isAuthenticated && user ? user.name : 'Stranger'}
            </Typography>
          </Box>
          {!isAuthenticated && renderLoginButton()}
        </Box>
      </Box>
    </Container>
  )
}

export default HomeGreeting
