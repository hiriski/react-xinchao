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

export default {
  topMenus: [
    {
      label: 'My Profile',
      path: ROUTES.PROFILE,
      Icon: <AccountCircleIcon />,
    },
    {
      label: 'Thread',
      path: ROUTES.THREAD,
      Icon: <ForumIcon />,
    },
    {
      label: 'Phrasesbook',
      path: ROUTES.PHRASEBOOK_LIST,
      Icon: <BookIcon />,
    },
    {
      label: 'Chatting',
      path: ROUTES.CHAT,
      Icon: <ChatIcon />,
    },
    {
      label: 'Favorite',
      path: ROUTES.FAVORITE,
      Icon: <FavoriteIcon />,
    },
    {
      label: 'Settings',
      path: ROUTES.SETTINGS,
      Icon: <SettingsIcon />,
    },
  ],
  bottomMenus: [
    {
      label: 'Contact Developer',
      path: ROUTES.CONTACT,
      Icon: <MailOutlineIcon />,
    },
    {
      label: 'About this app',
      path: ROUTES.ABOUT,
      Icon: <HelpOutlineIcon />,
    },
  ],
};
