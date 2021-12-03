import React, { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Footer from '../../components/footer'
import Snackbar from '../../components/common/snackbar'
import { AppAppBar } from '../../components/appbar'

type Props = {
  children: ReactNode
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const MainLayout: FC<Props> = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      {/* ===== App App Bar ===== */}
      <AppAppBar />
      {/* ===== */}
      <Offset />

      {/* ===== Main Wrappper ===== */}
      <Box flex="1">
        {/* <Outlet /> */}
        {children}
      </Box>
      {/* ===== */}

      {/* ===== Footer ===== */}
      <Footer />
      {/* ===== */}

      {/* ===== Global Snackbar / Alert ===== */}
      <Snackbar />
      {/* ===== */}
    </Box>
  )
}

export default MainLayout
