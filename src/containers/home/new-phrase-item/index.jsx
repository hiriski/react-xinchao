import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MaterialUIAvatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import { openDialogPhrasebookDetails } from 'src/modules/common/actions';
import clsx from 'clsx';
import Avatar from 'src/components/avatar';
import { timeAgo } from 'src/utils/time';

const NewPhraseItem = ({ phrase, containerStyle }) => {
  const { text, created_by: creator, created_at } = phrase;
  const dispatch = useDispatch();

  const handleClickItem = () => {
    dispatch(openDialogPhrasebookDetails(phrase));
  };

  const classes = useStyles();
  return (
    <div className={clsx(classes.root, containerStyle && containerStyle)}>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <MaterialUIAvatar className={classes.avatarIcon}>
            <VolumeUpIcon />
          </MaterialUIAvatar>
        </ListItemAvatar>
        <ListItemText
          onClick={handleClickItem}
          primary={text.vi}
          secondary={text.id ? text.id : '-'}
        />
      </ListItem>
      <Divider className={classes.divider} />
      <Box className={classes.author}>
        <div className={classes.authorContainer}>
          <Avatar avatarStyle={classes.avatarCreator} user={creator} />
          <Box ml={2} className={classes.creatorInfo}>
            <Box className={classes.creator}>
              <Typography className={classes.creatorName} noWrap component="h6">
                {creator.name}
              </Typography>
              <Typography
                className={classes.creatorLevel}
                noWrap
                component="span"
              >
                {creator.level.name}
              </Typography>
            </Box>
            <Typography className={classes.time} variant="subtitle2">
              {timeAgo(created_at)}
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    '& .MuiListItemText-primary': {
      whiteSpace: 'nowrap',
    },
    '& .MuiListItemText-secondary': {
      whiteSpace: 'nowrap',
      fontSize: 13,
    },
  },
  avatarIcon: {
    backgroundColor: '#ececec',
    color: theme.palette.primary.main,
    '& svg': {
      color: 'inherit',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  author: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(1),
  },
  authorContainer: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
  },
  avatarCreator: {
    width: 28,
    height: 28,
  },
  creatorInfo: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
  },
  creator: {
    marginRight: 'auto',
    lineHeight: 1,
  },
  creatorName: {
    lineHeight: 1,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
  },
  creatorLevel: {
    lineHeight: 1,
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: theme.palette.text.hint,
  },
  divider: {
    margin: theme.spacing(0, 2),
  },
}));

NewPhraseItem.propTypes = {
  phrase: PropTypes.object.isRequired,
  containerStyle: PropTypes.any,
};

export default NewPhraseItem;
