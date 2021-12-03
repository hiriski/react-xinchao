import React, { FC, ReactElement, useState, useEffect } from 'react'
import { Box, Button, Container, Typography, Skeleton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useAppSelector } from '../../store/hook'
import { PhraseBreadcrumbs } from '.'

type Props = {
  title?: string
  phrasesCount?: number
  HEADER_HEIGHT: string
}

type SlideOnScrollProps = {
  children: ReactElement
  HEADER_HEIGHT: string
}

const SlideOnScroll: FC<SlideOnScrollProps> = ({ HEADER_HEIGHT, children }: SlideOnScrollProps) => {
  const trigger = useScrollTrigger()
  return (
    <Box
      sx={{
        height: HEADER_HEIGHT,
        backgroundColor: 'background.paper',
        position: 'fixed',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        top: 0,
        zIndex: 1099, // zIndex.appBar - 1
        mt: 8, // toolbar offset (64px)
        transition: 'margin-top 500ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        '&.zeroOffset': {
          mt: 0,
        },
      }}
      className={trigger ? 'zeroOffset' : ''}
    >
      {children}
    </Box>
  )
}

const PhrasebookHeader: FC<Props> = ({ title, phrasesCount, HEADER_HEIGHT }: Props) => {
  const { category, isFetching } = useAppSelector((state) => state.phrasebook)
  const [breadcrumbs, setBreadcrummns] = useState<string[]>(['Phrasesbook'])

  useEffect(() => {
    if (category) setBreadcrummns(['Phrasebook', category.text.en])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  return (
    <SlideOnScroll HEADER_HEIGHT={HEADER_HEIGHT}>
      <Box>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PhraseBreadcrumbs items={breadcrumbs} />

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Box
                sx={{ lineHeight: 0, mr: 1, color: category && category.color !== null ? category.color.value : null }}
              >
                {isFetching ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <BookmarkBorderIcon sx={{ fontSize: 48 }} />
                )}
              </Box>
              <Box>
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 22,
                      lg: 26,
                    },
                  }}
                >
                  {/* eslint-disable-next-line */}
                  {isFetching ? <Skeleton variant="text" width={135} /> : category ? category.text.en : title}
                </Typography>

                <Typography component="h6" variant="subtitle2" color="text.secondary">
                  {/* eslint-disable-next-line */}
                  {isFetching ? (
                    <Skeleton variant="text" width={135} />
                  ) : category ? (
                    `${category.phrases_count} Phrases`
                  ) : (
                    `${phrasesCount}`
                  )}
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
                <Button startIcon={<AddIcon />} variant="text" size="small" color="secondary">
                  Add New
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </SlideOnScroll>
  )
}

PhrasebookHeader.defaultProps = {
  title: 'Phrases',
  phrasesCount: 0,
}

export default PhrasebookHeader
