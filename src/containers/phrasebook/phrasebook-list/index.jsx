import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhrasebookItem from '../phrasebook-item';
import PhrasebookTitle from '../phrasebook-title';
import FolderIcon from '@material-ui/icons/Folder';

const PhrasebookList = ({ phrasebooks, category }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      {category ? (
        <PhrasebookTitle title={category.text.en} Icon={<FolderIcon />} />
      ) : null}
      <Grid container spacing={isBigScreen ? 1 : 1}>
        {phrasebooks.map((phrasebook) => (
          <Grid key={phrasebook.id} item xs={12} md={4}>
            <PhrasebookItem key={phrasebook.id} phrasebook={phrasebook} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
}));

PhrasebookList.propTypes = {
  phrasebooks: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
};

export default PhrasebookList;
