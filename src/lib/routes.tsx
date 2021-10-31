import React from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router'
import {
  ForgotPasswordPage,
  HomePage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  PhrasebookPage,
  RegisterPage,
  ResetPasswordPage,
} from '../pages'
import { PREFIX_APP_VERSION } from '../utils/constants'
import { MainLayout } from '../layouts'

const routes = (isLoggedIn: boolean): RouteObject[] => [
  {
    path: 'app',
    element: <Outlet />,
    children: [
      {
        path: 'v2',
        element: <MainLayout />,
        children: [
          {
            path: 'phrasebook',
            element: <PhrasebookPage />,
          },
          {
            path: '',
            element: <HomePage />,
          },
        ],
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
        path: 'register',
        element: !isLoggedIn ? <RegisterPage /> : <Navigate to={PREFIX_APP_VERSION} />,
      },
      {
        path: 'forgot-password',
        element: !isLoggedIn ? <ForgotPasswordPage /> : <Navigate to={PREFIX_APP_VERSION} />,
      },
      {
        path: 'reset-password',
        element: !isLoggedIn ? <ResetPasswordPage /> : <Navigate to={PREFIX_APP_VERSION} />,
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
