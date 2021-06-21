import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import BookIcon from '@material-ui/icons/Book';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { ROUTES } from 'src/config';
import HomeIcon from '@material-ui/icons/Home';

export default {
  topMenus: [
    {
      label: 'Home',
      path: ROUTES.PREFIX,
      Icon: <HomeIcon />,
    },
    {
      label: 'My Profile',
      path: ROUTES.PREFIX + ROUTES.PROFILE,
      Icon: <AccountCircleIcon />,
    },
    {
      label: 'Discussion',
      path: ROUTES.PREFIX + ROUTES.DISCUSSION,
      Icon: <ForumIcon />,
    },
    {
      label: 'Phrasesbook',
      path: ROUTES.PREFIX + ROUTES.PHRASEBOOK_LIST,
      Icon: <BookIcon />,
    },
    {
      label: 'Chatting',
      path: ROUTES.PREFIX + ROUTES.CHAT,
      Icon: <ChatIcon />,
    },
    {
      label: 'Favorite',
      path: ROUTES.PREFIX + ROUTES.FAVORITE,
      Icon: <FavoriteIcon />,
    },
    {
      label: 'Settings',
      path: ROUTES.PREFIX + ROUTES.SETTINGS,
      Icon: <SettingsIcon />,
    },
  ],
  bottomMenus: [
    {
      label: 'Contact Developer',
      path: ROUTES.PREFIX + ROUTES.CONTACT,
      Icon: <MailOutlineIcon />,
    },
    {
      label: 'About this app',
      path: ROUTES.PREFIX + ROUTES.ABOUT,
      Icon: <HelpOutlineIcon />,
    },
  ],
};
