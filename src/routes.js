import React from 'react';
import { ROUTES } from 'src/config';
import { Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth-layout';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import NotMatchPage from './pages/404';
import MainLayout from './layouts/main-layout';
import HomePage from './pages/home';
import ProfilePage from './pages/account/profile';
import ChatPage from './pages/chat';
import PhrasebookListPage from './pages/phrasebook/phrasebook-list';
import LoggedOutPage from './pages/auth/logged-out';
import PhrasebookCategoryListPage from './pages/phrasebook/phrasebook-category-list';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.SIGNIN,
        element: <AuthLayout />,
        children: [{ path: '/', element: <LoginPage /> }],
      },
      {
        path: ROUTES.SIGNUP,
        element: <AuthLayout />,
        children: [{ path: '/', element: <RegisterPage /> }],
      },
      {
        path: ROUTES.LOGGEDOUT,
        element: <AuthLayout />,
        children: [{ path: '/', element: <LoggedOutPage /> }],
      },
      {
        path: 'profile',
        element: isLoggedIn ? <ProfilePage /> : <Navigate to={ROUTES.SIGNIN} />,
      },
      { path: 'chat', element: <ChatPage /> },
      { path: 'phrasebook', element: <PhrasebookCategoryListPage /> },
      { path: 'phrasebook/:category_slug', element: <PhrasebookListPage /> },
      { path: '404', element: <NotMatchPage /> },
      { path: '/', element: <HomePage /> },
      { path: '*', element: <Navigate to={'/404'} /> },
    ],
  },
];

export default routes;
