import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { TPhrasebookCategoryColor, TPhrasebookCategoryText } from '../../types/phrasebookCategory'
import { ROUTES } from '../../utils/constants'

type Props = {
  id: number
  slug: string
  color: TPhrasebookCategoryColor
  text: TPhrasebookCategoryText
  phrasesCount: number
}

const PhrasebookCategoryItem: FC<Props> = ({ id, slug, text, color, phrasesCount }: Props) => {
  const { en } = text
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`${ROUTES.PHRASEBOOK}/${slug}`)
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: 1,
        cursor: 'pointer',
        backgroundColor: 'background.paper',
        boxShadow: '0 12px 32px 0 rgb(10 10 10 / 4%)',
        '&:hover': {
          // backgroundColor: '#fbfbfb',
          boxShadow: '0 12px 32px 0 rgb(10 10 10 / 8%)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
        <Box sx={{ lineHeight: 0 }} style={{ color: color ? color.value : null }}>
          <BookmarkBorderIcon sx={{ fontSize: 52 }} />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography component="h3" variant="h5" style={{ color: color ? color.value : null }}>
            {en}
          </Typography>
          {phrasesCount > 0 ? (
            <Typography variant="subtitle2" color="text.secondary">
              {phrasesCount} phrases
            </Typography>
          ) : (
            <Typography variant="subtitle2" color="text.secondary">
              0 phrases
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default PhrasebookCategoryItem
