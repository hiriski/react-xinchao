import React, { FC, useEffect } from 'react'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { HomeGreeting } from '../../components/home'
import { fetchPhrasebookCategories } from '../../store/phrasebook-category/actions'
import { useAppSelector } from '../../store/hook'
import { PhrasebookCategoryList } from '../../components/phrasebook-categories'
import { MainLayout } from '../../layouts'

const HomePage: FC = () => {
  const dispatch = useDispatch()
  const { categories } = useAppSelector((state) => state.phrasebookCategory)

  useEffect(() => {
    dispatch(fetchPhrasebookCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <HomeGreeting />
        <PhrasebookCategoryList items={categories} />
      </Box>
    </MainLayout>
  )
}

export default HomePage
