import React, { FC } from 'react'
import { Box } from '@mui/material'

type Props = {
  source: string
}

const ProfileCoverPhoto: FC<Props> = ({ source }: Props): JSX.Element => (
  <Box
    sx={{
      height: {
        xs: 200,
        md: 220,
      },
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${source})`,
    }}
  />
)

export default ProfileCoverPhoto
