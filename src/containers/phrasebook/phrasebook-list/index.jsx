import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhrasebookItem from '../phrasebook-item';
import PhrasebookTitle from '../phrasebook-title';
import FolderIcon from '@material-ui/icons/Folder';

const PhrasebookList = ({ phrases, category }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      {category ? (
        <PhrasebookTitle title={category.text.en} Icon={<FolderIcon />} />
      ) : null}
      <Grid container spacing={isBigScreen ? 1 : 1}>
        {phrases.map((phrase) => (
          <Grid key={phrase.id} item xs={12} md={4}>
            <PhrasebookItem key={phrase.id} phrase={phrase} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0, 12, 0),
  },
}));

PhrasebookList.propTypes = {
  phrases: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
};

export default PhrasebookList;
