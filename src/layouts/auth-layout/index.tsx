import React, { FC } from 'react'
import { Box, Grid } from '@mui/material'
import { Outlet } from 'react-router'

const AuthLayout: FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={5} lg={6}>
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right',
            backgroundImage: 'url("/static/images/taylor-simpson-KgOebsSTD-I-unsplash.jpg")',
          }}
        />
      </Grid>
      <Grid item xs={12} md={7} lg={6}>
        <Box
          sx={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Outlet />

          <Box
            sx={{
              mt: 5,
              '& img': {
                width: 120,
              },
            }}
          >
            <img src="/static/images/logo-primary-with-text.png" alt="logo" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AuthLayout
