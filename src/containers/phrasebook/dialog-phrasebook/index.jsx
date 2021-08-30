import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogDetailPhrase } from 'src/modules/phrasebook/actions';
import PhraseDetail from '../phrase-detail';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogPhrasebookDetails = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { dialogDetailPhrase } = useSelector(
    (state) => state.phrasebookReducer,
  );

  const handleClose = () => {
    dispatch(closeDialogDetailPhrase());
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={Boolean(dialogDetailPhrase?.open)}
      fullWidth
      maxWidth="sm"
      className={classes.root}
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle>Phrase</DialogTitle>
      {dialogDetailPhrase?.data && (
        <PhraseDetail phrase={dialogDetailPhrase.data} />
      )}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default DialogPhrasebookDetails;
