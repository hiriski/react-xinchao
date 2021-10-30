import React, { FC, ReactNode } from 'react'
import { Box, Grid } from '@mui/material'
import Logo from '../../components/common/logo'

type Props = {
  children: ReactNode
}

const AuthLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          lg={7}
          sx={{
            position: {
              xs: 'fixed',
              md: 'relative',
            },
            width: {
              xs: '100%',
              md: 'unset',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: 'url("/static/images/florian-wehde-lY87gHWdGNo-unsplash.jpg")',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={5}
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              minHeight: '100vh',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              backgroundColor: {
                xs: 'unset',
                md: 'background.paper',
              },
            }}
          >
            {children}
            <Box sx={{ mt: 5 }}>
              <Logo width={46} color="secondary" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AuthLayout
