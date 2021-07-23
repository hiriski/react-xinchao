import React from 'react';
import { ROUTES } from 'src/config';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default {
  topMenus: [
    {
      label: 'Home',
      path: ROUTES.PREFIX_APP,
      Icon: <HomeIcon />,
    },
    {
      label: 'My Profile',
      path: ROUTES.PREFIX_APP + ROUTES.PROFILE,
      Icon: <AccountCircleIcon />,
    },
    {
      label: 'Discussion',
      path: ROUTES.PREFIX_APP + ROUTES.DISCUSSION,
      Icon: <ForumIcon />,
    },
    {
      label: 'Phrasesbook',
      path: ROUTES.PREFIX_APP + ROUTES.PHRASEBOOK,
      Icon: <BookIcon />,
    },
    {
      label: 'Chat',
      path: ROUTES.PREFIX_APP + ROUTES.CHAT,
      Icon: <ChatIcon />,
    },
    {
      label: 'Favorite',
      path: ROUTES.PREFIX_APP + ROUTES.FAVORITE,
      Icon: <FavoriteIcon />,
    },
    {
      label: 'Settings',
      path: ROUTES.PREFIX_APP + ROUTES.SETTINGS,
      Icon: <SettingsIcon />,
    },
  ],
  bottomMenus: [
    {
      label: 'Contact Developer',
      path: ROUTES.PREFIX_APP + ROUTES.CONTACT,
      Icon: <MailOutlineIcon />,
    },
    {
      label: 'About this app',
      path: ROUTES.PREFIX_APP + ROUTES.ABOUT,
      Icon: <HelpOutlineIcon />,
    },
  ],
};
