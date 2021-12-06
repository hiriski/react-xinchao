import React, { FC, ReactElement } from 'react'
import { Box, Container, Theme, Typography, useScrollTrigger } from '@mui/material'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { TProfileUser } from '../../../types/account'
import { getNationalFlag, getProfilePhoto } from '../../../utils/profile'
import { Avatar } from '../../common'

type Props = {
  profile: TProfileUser
}

const AVATAR_SIZE = 120

const COVER_PHOTO_HEIGHT = {
  xs: 180,
  md: 220,
}

type SlideOnScrollProps = {
  children: ReactElement
  trigger: boolean
}

const SlideOnScroll: FC<SlideOnScrollProps> = ({ children, trigger }: SlideOnScrollProps) => {
  const toolbarHeight = 64
  return (
    <Box
      sx={{
        height: trigger ? 0 : 320,
        position: 'fixed',
        flexDirection: 'column',
        display: 'flex',
        width: '100%',
        top: {
          xs: trigger ? -126 : `${toolbarHeight + 24}px`,
          md: trigger ? -148 : `${toolbarHeight + 24}px`,
        },
        left: 0,
        zIndex: 1099, // zIndex.appBar - 1
        transition: (theme) => theme.transitions.create(['top', 'transform']),
      }}
      className={trigger ? 'zeroOffset' : ''}
    >
      <Container sx={{ display: 'flex', flex: 1, flexWrap: 'nowrap' }}>{children}</Container>
    </Box>
  )
}

const ProfileInfo: FC<Props> = ({ profile }: Props) => {
  const trigger = useScrollTrigger()
  return (
    <SlideOnScroll trigger={trigger}>
      <Box
        sx={{
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          boxShadow: '0 12px 32px 0 rgb(10 10 10 / 0.65%)',
        }}
      >
        {/* ===== Profile cover photo ===== */}
        {profile.cover_photo_url ? (
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${profile.cover_photo_url})`,
              height: { ...COVER_PHOTO_HEIGHT },
              borderRadius: 2,
            }}
          >
            {/* Opacity */}
            <Box
              sx={{
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                position: 'absolute',
                backgroundColor: trigger ? 'rgb(251 251 251 / 65%)' : 'transparent',
                transition: (theme: Theme) => theme.transitions.create(['background-color', 'transform']),
              }}
            />
            {/* <Box
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
            /> */}
          </Box>
        ) : (
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundColor: '#bcbcbc',
              height: { ...COVER_PHOTO_HEIGHT },
            }}
          />
        )}
        {/* ===== */}

        {/* ===== Profile photo ===== */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'center',
              md: 'flex-end',
            },
            position: 'relative',
            justifyContent: 'flex-start',
            px: 6,
            marginTop: {
              xs: `${-AVATAR_SIZE / 2}px`,
              md: `${-AVATAR_SIZE / 2}px`,
            },
          }}
        >
          <Avatar
            source={getProfilePhoto(profile)}
            name={profile.name}
            color="red"
            size={trigger ? 44 : AVATAR_SIZE}
            sx={{ border: trigger ? '3px solid #fff' : '5px solid #fff' }}
          />
          <Box
            sx={{
              flex: 1,
              display: {
                xs: trigger ? 'none' : 'flex',
                md: 'flex',
              },
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              mt: {
                xs: 1,
                md: 0,
              },
              mb: {
                xs: 0,
                md: 2.25,
              },
              ml: {
                xs: 0,
                md: 3,
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 2 }} variant="h4" component="h3">
                {profile.name}
              </Typography>
              <FlashOnIcon sx={{ fontSize: 17, color: 'secondary.main' }} />
              <Typography variant="subtitle2" component="h6">
                {profile.role.text.en}
              </Typography>
            </Box>
            {profile.country && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: {
                    xs: 0.5,
                    md: 0,
                  },
                  '& img': { width: 15, height: 'auto', mr: 1 },
                }}
              >
                <img src={getNationalFlag(profile.country)} alt={profile.country.name} />
                <Typography variant="subtitle2" component="h6">
                  {profile.country.name}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        {/* ===== */}
      </Box>
    </SlideOnScroll>
  )
}

export default ProfileInfo
