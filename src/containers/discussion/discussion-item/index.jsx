import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useDispatch } from 'react-redux';
import { openDialogPhrasebookDetails } from 'src/modules/common/actions';
import clsx from 'clsx';

const DiscussionItem = ({ phrase, containerStyle }) => {
  const classes = useStyles();
  const { text } = phrase;
  const dispatch = useDispatch();

  const handleClickItem = () => {
    dispatch(openDialogPhrasebookDetails(phrase));
  };

  return (
    <ListItem className={clsx(classes.root, containerStyle && containerStyle)}>
      <ListItemAvatar>
        <Avatar className={classes.avatarIcon}>
          <VolumeUpIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        onClick={handleClickItem}
        primary={text.vi}
        secondary={text.id ? text.id : '-'}
      />
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
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
    color: theme.palette.secondary.main,
    '& svg': {
      color: 'inherit',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}));

DiscussionItem.propTypes = {
  phrase: PropTypes.object.isRequired,
  containerStyle: PropTypes.any,
};

export default DiscussionItem;
