import React, { FC, ReactElement, useState } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import GridViewIcon from '@mui/icons-material/GridView'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { useDispatch } from 'react-redux'
import { useGoogleLogout, UseGoogleLogoutResponse } from 'react-google-login'
import { APP_NAME, ROUTES, GOOGLE_AUTH_CLIENT_ID } from '../../utils/constants'
import { Logo } from '../common'
import { useAppSelector } from '../../store/hook'
import { getProfilePhoto, hasProfilePhoto } from '../../utils/profile'
import { revokeToken } from '../../store/auth/actions'

const AVATAR_SIZE = 26

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

type HideOnScrollProps = {
  children: ReactElement
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children }: HideOnScrollProps) => {
  const trigger = useScrollTrigger()
  return (
    <Slide timeout={500} appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const AppAppBar: FC = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isHoverLogo, setIsHoverLogo] = useState<boolean>(false)
  const { user, isAuthenticated, provider } = useAppSelector((state) => state.auth)

  const onLogoutSuccess = (): void => {
    // eslint-disable-next-line no-console
    console.log('Logout Gogole Success')
  }

  const onFailure = (): void => {
    // eslint-disable-next-line no-console
    console.log('Logout google failure')
  }

  const { signOut }: UseGoogleLogoutResponse = useGoogleLogout({
    clientId: GOOGLE_AUTH_CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  })

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (): void => {
    setAnchorEl(null)
  }

  const handleLogout = (): void => {
    dispatch(revokeToken())

    // Close menu
    handleMenuClose()

    if (provider === 'google') signOut()
  }

  // Profile menu
  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={RouterLink} to={ROUTES.ACCOUNT}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <ExitToAppIcon sx={{ color: 'red' }} fontSize="small" />
        </ListItemIcon>
        <ListItemText>Log Out</ListItemText>
      </MenuItem>
    </Menu>
  )

  const renderProfilePhoto = (profilePhoto?: string, name?: string): ReactElement =>
    isAuthenticated &&
    user && (
      <Box
        sx={{
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

  const renderLoginButton = (
    <Box sx={{ ml: 'auto' }}>
      <Button startIcon={<AccountCircleIcon />} component={RouterLink} to={ROUTES.SIGNIN}>
        Sign In
      </Button>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0} /** <-- fix warning has no effect */
          position="fixed"
          variant="outlined"
          color="inherit"
          sx={{ border: 'none !important' }}
        >
          <Container>
            <Toolbar disableGutters>
              <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                <GridViewIcon sx={{ color: 'text.secondary', fontSize: 22 }} />
              </IconButton>
              <Box
                onMouseEnter={() => setIsHoverLogo(true)}
                onMouseLeave={() => setIsHoverLogo(false)}
                component={RouterLink}
                to={ROUTES.HOME}
                sx={{
                  ml: 1,
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  justifyContent: 'center',
                }}
              >
                {isHoverLogo ? <Logo width={28} color="primary" /> : <Logo width={28} color="secondary" />}
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
                    ml: 2,
                    fontSize: 18,
                    color: 'text.primary',
                  }}
                >
                  {APP_NAME}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'flex' } }}>
                {isAuthenticated ? (
                  <Button
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    sx={{ borderRadius: 6, px: 1.6, textTransform: 'none', mr: -1.5 /* it's same with edge="end" */ }}
                    startIcon={
                      hasProfilePhoto(user)
                        ? renderProfilePhoto(getProfilePhoto(user), user.name)
                        : renderProfilePhoto(null)
                    }
                  >
                    <Typography
                      variant="subtitle2"
                      component="h6"
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      {user.name}
                    </Typography>
                  </Button>
                ) : (
                  renderLoginButton
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {renderMenu}
    </>
  )
}

export default AppAppBar
