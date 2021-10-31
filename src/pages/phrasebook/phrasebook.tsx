import React, { FC, useEffect } from 'react'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchPhrasebookCategories } from '../../store/phrasebookCategory/actions'
import { useAppSelector } from '../../store/hook'
import { PhrasebookCategoryList } from '../../components/phrasebook-categories'

const PhrasebookPage: FC = () => {
  const dispatch = useDispatch()
  const { categories } = useAppSelector((state) => state.phrasebookCategory)

  useEffect(() => {
    dispatch(fetchPhrasebookCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1>Phrasaebook Page</h1>
      {/* <PhrasebookCategoryList items={categories} /> */}
    </Box>
  )
}

export default PhrasebookPage
