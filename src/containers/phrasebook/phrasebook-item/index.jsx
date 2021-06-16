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

const PhrasebookItem = ({ phrasebook }) => {
  const { text } = phrasebook;
  const dispatch = useDispatch();

  const handleClickItem = () => {
    dispatch(openDialogPhrasebookDetails(phrasebook));
  };

  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar className={classes.avatarIcon}>
          <VolumeUpIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        onClick={handleClickItem}
        primary={text.vi}
        secondary={text.id ? text.id : ''}
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
    color: theme.palette.primary.main,
    '& svg': {
      color: 'inherit',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));

PhrasebookItem.propTypes = {
  phrasebook: PropTypes.object.isRequired,
};

export default PhrasebookItem;
