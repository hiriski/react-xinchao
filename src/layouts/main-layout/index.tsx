import React, { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const MainLayout: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Outlet />
    </Box>
  )
}

export default MainLayout
