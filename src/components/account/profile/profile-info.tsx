import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { TProfileUser } from '../../../types/account'
import { getProfilePhoto } from '../../../utils/profile'
import { Avatar } from '../../common'

type Props = {
  profile: TProfileUser
}

const AVATAR_SIZE = 120

const COVER_PHOTO_HEIGHT = {
  xs: 200,
  md: 220,
}

const ProfileInfo: FC<Props> = ({ profile }: Props) => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: 0,
          md: 3,
        },
        borderRadius: 1.5,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
      }}
    >
      {/* ===== Profile cover photo ===== */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${profile.cover_photo_url})`,
          height: { ...COVER_PHOTO_HEIGHT },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 90,
            position: 'absolute',
            bottom: 0,
            background: `linear-gradient(
              360deg,
              rgb(255 255 255) 0%,
              rgb(255 255 255) 15%,
              rgb(255 255 255 / 0%) 90%
            )`,
          }}
        />
      </Box>
      {/* ===== */}

      {/* ===== Profile photo ===== */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          marginTop: {
            xs: `${-AVATAR_SIZE / 2}px`,
            md: `${-AVATAR_SIZE / 2}px`,
          },
        }}
      >
        <Avatar source={getProfilePhoto(profile)} name={profile.name} color="red" size={100} />
        {/* <Box
          sx={{
            overflow: 'hidden',
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            border: '6px solid #fbfbfb',
            borderRadius: `${AVATAR_SIZE}px`,
            '& img': {
              width: '100%',
              height: 'auto',
            },
          }}
        >
          <img src={profile.photo_url} alt={`Profile picture${profile.name}`} />
        </Box> */}
      </Box>
      {/* ===== */}

      <Box>
        <Typography variant="h4" component="h3">
          {profile.name}
        </Typography>
      </Box>
      <Box>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
        <h1>Another section</h1>
      </Box>
    </Box>
  )
}

export default ProfileInfo
