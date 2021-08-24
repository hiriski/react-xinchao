import React from 'react';
import { ROUTES } from 'src/config';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthLayout, MainLayout } from 'src/layouts';
import {
  AboutPage,
  ChatPage,
  ContactPage,
  CreatePhrasebookPage,
  DiscussionPage,
  HomePage,
  LandingPage,
  LoginPage,
  NotMatchPage,
  PhrasebookListPage,
  ProfilePage,
  RegisterPage,
} from 'src/pages';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.PHRASEBOOK,
        element: <Outlet />,
        children: [
          {
            path: '/create',
            element: <CreatePhrasebookPage />,
          },
          // {
          //   path: ROUTES.PHRASEBOOK + '/:category_slug',
          //   element: <PhrasebookListPage />,
          // },
          {
            path: '/',
            element: <PhrasebookListPage />,
          },
        ],
      },
      {
        path: ROUTES.CHAT,
        element: <ChatPage />,
      },
      {
        path: ROUTES.DISCUSSION,
        element: <DiscussionPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: ROUTES.SIGNIN,
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            element: isLoggedIn ? <Navigate to="/app" /> : <LoginPage />,
          },
        ],
      },
      {
        path: ROUTES.SIGNUP,
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            element: isLoggedIn ? <Navigate to="/app" /> : <RegisterPage />,
          },
        ],
      },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      // { path: ROUTES.NOT_MATCH, element: <NotMatchPage /> },
      { path: '*', element: <NotMatchPage /> },
      {
        path: '/',
        element: <LandingPage />,
      },
      // { path: '*', element: <Navigate to={'/404'} /> },
    ],
  },
];

export default routes;
