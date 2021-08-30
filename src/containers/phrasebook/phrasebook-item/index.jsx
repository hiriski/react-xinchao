import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useDispatch } from 'react-redux';
import { openDialogDetailPhrase } from 'src/modules/phrasebook/actions';
const PhrasebookItem = ({ phrase, containerStyle }) => {
  const { text } = phrase;
  const dispatch = useDispatch();

  const handleClickItem = () => {
    dispatch(openDialogDetailPhrase({ open: true, data: phrase }));
  };

  const handleClickIcon = () => {
    alert('icon cliced');
  };

  const classes = useStyles();
  return (
    <ListItem className={clsx(classes.root, containerStyle && containerStyle)}>
      <ListItemAvatar onClick={handleClickIcon}>
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
    cursor: 'pointer',
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

PhrasebookItem.propTypes = {
  phrase: PropTypes.object.isRequired,
  containerStyle: PropTypes.any,
};

export default PhrasebookItem;
