import React, { FC, useEffect } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/hook'
import { MainLayout } from '../../layouts'
import { fetchProfile, fetchPhrasesByMe } from '../../store/account/actions'
import { ProfileInfo, ProfilePhrasesList } from '../../components/account/profile'
import { DrawerAddEditPhrase } from '../../components/phrasebook'

const ProfileAccountScreen: FC = () => {
  const dispatch = useDispatch()

  const { profile, isFetching } = useAppSelector((state) => state.account)

  useEffect(() => {
    dispatch(fetchProfile())
    dispatch(fetchPhrasesByMe())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <DrawerAddEditPhrase />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {!isFetching && profile !== null && <ProfileInfo profile={profile} />}
        <Box sx={{ mt: '375px' }}>
          <Container>
            <ProfilePhrasesList />
          </Container>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default ProfileAccountScreen
