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
import { ProfileAccountScreen } from '../pages/account'
import { ROUTES } from '../utils/constants'

const routes = (isLoggedIn: boolean): RouteObject[] => [
  {
    path: 'app',
    element: <Outlet />,
    children: [
      {
        path: 'v2',
        element: <Outlet />,
        children: [
          {
            path: 'signin',
            element: !isLoggedIn ? <LoginPage /> : <Navigate to={ROUTES.HOME} />,
          },
          {
            path: 'register',
            element: !isLoggedIn ? <RegisterPage /> : <Navigate to={ROUTES.HOME} />,
          },
          {
            path: 'forgot-password',
            element: !isLoggedIn ? <ForgotPasswordPage /> : <Navigate to={ROUTES.HOME} />,
          },
          {
            path: 'reset-password',
            element: !isLoggedIn ? <ResetPasswordPage /> : <Navigate to={ROUTES.HOME} />,
          },
          {
            path: 'phrasebook/:category',
            element: <PhrasebookPage />,
          },
          {
            path: 'account',
            element: !isLoggedIn ? <Navigate to={ROUTES.SIGNIN} /> : <ProfileAccountScreen />,
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
        path: '/',
        element: <LandingPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export default routes
