import React, { FC, ReactElement, useState } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert'
import { styled, alpha } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import GridViewIcon from '@mui/icons-material/GridView'
import AccountCircle from '@mui/icons-material/AccountCircle'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import { APP_NAME, ROUTES } from '../../utils/constants'
import { Logo } from '../common'

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)
  const [isHoverLogo, setIsHoverLogo] = useState<boolean>(false)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = (): void => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" variant="outlined" color="inherit" sx={{ border: 'none !important' }}>
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
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default AppAppBar
