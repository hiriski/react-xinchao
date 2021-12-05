import React, { FC, useEffect } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/hook'
import { MainLayout } from '../../layouts'
import { fetchProfile } from '../../store/account/actions'
import { ProfileInfo } from '../../components/account/profile'

const ProfileAccountScreen: FC = () => {
  const dispatch = useDispatch()

  const { profile, isFetching } = useAppSelector((state) => state.account)

  useEffect(() => {
    dispatch(fetchProfile())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              {!isFetching && profile !== null && <ProfileInfo profile={profile} />}
            </Grid>
            <Grid item xs={12} md={7}>
              <h3>Another section</h3>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default ProfileAccountScreen
