import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeDialogAddNewPhrase } from 'src/modules/common/actions';
import { makeStyles, Typography } from '@material-ui/core';
import FormPhrase from '../form-phrase';
import { fetchPhrasebookCategories } from 'src/modules/category/actions';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const DialogAddNewPhrase = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpenDialogAddNewPhrase } = useSelector(
    (state) => state.commonReducer,
  );

  const handleClose = () => {
    dispatch(closeDialogAddNewPhrase());
  };

  React.useEffect(() => {
    if (isOpenDialogAddNewPhrase) {
      dispatch(fetchPhrasebookCategories());
    }
  }, [isOpenDialogAddNewPhrase]);

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog
      open={isOpenDialogAddNewPhrase}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      maxWidth="lg"
    >
      <DialogTitle
        className={classes.dialogTitle}
        style={{ cursor: 'move' }}
        id="draggable-dialog-title"
      >
        <Typography component="h2" variant="h3">
          Add New Phrase
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <FormPhrase handleFormSubmit={handleFormSubmit} />
      </DialogContent>
      {/* <DialogActions>
        <Button
          className={classes.cancleButton}
          autoFocus
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button startIcon={<AddIcon />} onClick={handleClose} color="secondary">
          Add Phrase
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  cancleButton: {
    color: 'red',
  },
  dialogContent: {
    padding: theme.spacing(3, 8, 5, 8),
  },
  dialogTitle: {
    padding: theme.spacing(3, 8, 0, 8),
  },
}));

export default DialogAddNewPhrase;
