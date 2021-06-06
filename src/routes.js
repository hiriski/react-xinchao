import React from 'react';
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

const routes = () => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'phrasebook', element: <PhrasebookListPage /> },
      { path: '404', element: <NotMatchPage /> },
      { path: '/', element: <HomePage /> },
      { path: '*', element: <Navigate to={'/404'} /> },
    ],
  },
];

export default routes;
