import React from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router'
import { HomePage, LandingPage, LoginPage, NotFoundPage } from '../pages'
import { PREFIX_APP_VERSION } from '../utils/constants'
import { MainLayout } from '../layouts'

const routes = (isLoggedIn: boolean): RouteObject[] => [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      {
        path: 'v2',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: 'signin',
        element: !isLoggedIn ? <LoginPage /> : <Navigate to={PREFIX_APP_VERSION} />,
      },
      {
        path: '/',
        element: <LandingPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export default routes
