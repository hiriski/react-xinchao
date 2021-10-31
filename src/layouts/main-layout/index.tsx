import React, { FC } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import Footer from '../../components/footer'
import Snackbar from '../../components/common/snackbar'

const MainLayout: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
      <Snackbar />
    </Box>
  )
}

export default MainLayout
