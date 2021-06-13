import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const PhrasebookItem = ({ phrasebook }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

PhrasebookItem.propTypes = {
  phrasebook: PropTypes.object.isRequired,
};

export default PhrasebookItem;
