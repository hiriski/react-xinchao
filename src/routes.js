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
import ThreadPage from './pages/thread';
import SettingsPage from './pages/settings';
import FavoritePage from './pages/favorite';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.SIGNIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.LOGGEDOUT,
        element: <LoggedOutPage />,
      },
      {
        path: '/',
        element: <Navigate to={'/app'} />,
      },
    ],
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.PROFILE,
        element: isLoggedIn ? <ProfilePage /> : <Navigate to={ROUTES.SIGNIN} />,
      },
      { path: ROUTES.CHAT, element: <ChatPage /> },
      { path: ROUTES.THREAD, element: <ThreadPage /> },
      { path: ROUTES.SETTINGS, element: <SettingsPage /> },
      { path: ROUTES.FAVORITE, element: <FavoritePage /> },
      { path: ROUTES.PHRASEBOOK_LIST, element: <PhrasebookCategoryListPage /> },
      {
        path: ROUTES.PHRASEBOOK_LIST + '/:category_slug',
        element: <PhrasebookListPage />,
      },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.NOT_MATCH, element: <NotMatchPage /> },
      { path: '/', element: <HomePage /> },
      { path: '*', element: <Navigate to={'/404'} /> },
    ],
  },
];

export default routes;
