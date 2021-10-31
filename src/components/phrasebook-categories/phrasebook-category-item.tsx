import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
import { useNavigate } from 'react-router'
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
    navigate(`${ROUTES.PHRASEBOOK}?category=${slug}`)
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: '0 12px 32px 0 rgb(10 10 10 / 4%)',
        '&:hover': {
          backgroundColor: '#fbfbfb',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 2 }}>
        <Box sx={{ lineHeight: 0 }} style={{ color: color ? color.value : null }}>
          <BookIcon sx={{ fontSize: 32 }} />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography component="h3" variant="h4" style={{ color: color ? color.value : null }}>
            {en}
          </Typography>
          {phrasesCount > 0 ? (
            <Typography variant="subtitle2">{phrasesCount} phrases</Typography>
          ) : (
            <Typography variant="subtitle2">No phrases</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default PhrasebookCategoryItem
