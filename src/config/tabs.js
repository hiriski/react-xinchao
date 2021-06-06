import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import BookIcon from '@material-ui/icons/Book';

export default [
  {
    title: 'Home',
    path: '/',
    Icon: HomeIcon,
  },
  {
    title: 'Chat',
    path: '/chat',
    Icon: ForumIcon,
  },
  {
    title: 'Phrasebooks',
    path: '/phrasebook',
    Icon: BookIcon,
  },
  {
    title: 'Profile',
    path: '/profile',
    Icon: AccountCircleIcon,
  },
];
