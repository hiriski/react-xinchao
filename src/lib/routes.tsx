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
import { ROUTES } from '../utils/constants'
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
        path: '/',
        element: <LandingPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

export default routes
