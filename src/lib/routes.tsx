import React from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router'
import { AuthLayout, MainLayout } from '../layouts'
import { HomePage, LandingPage, LoginPage, NotFoundPage } from '../pages'
import { PREFIX_APP_VERSION } from '../utils/constants'

const ROUTES: Record<string, string> = {
  LOGIN: `/signin`,
}

const routes = (isLoggedIn: boolean): RouteObject[] => [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
]

export default routes
