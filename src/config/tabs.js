import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import BookIcon from '@material-ui/icons/Book';
import { ROUTES } from './routes';

export default [
  {
    title: 'Home',
    path: '/app',
    Icon: HomeIcon,
  },
  {
    title: 'Chat',
    path: ROUTES.PREFIX_APP + ROUTES.CHAT,
    Icon: ForumIcon,
  },
  {
    title: 'Phrasebooks',
    path: ROUTES.PREFIX_APP + ROUTES.PHRASEBOOK,
    Icon: BookIcon,
  },
  {
    title: 'Profile',
    path: ROUTES.PREFIX_APP + ROUTES.PROFILE,
    Icon: AccountCircleIcon,
  },
];
