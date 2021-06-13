import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import PhrasebookItem from '../phrasebook-item';

const PhrasebookList = ({ phrasebooks }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {phrasebooks.map((phrasebook) => (
        <PhrasebookItem key={phrasebook.id} phrasebook={phrasebook} />
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

PhrasebookList.propTypes = {
  phrasebooks: PropTypes.array.isRequired,
};

export default PhrasebookList;
