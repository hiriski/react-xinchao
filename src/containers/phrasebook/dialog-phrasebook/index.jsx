import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogPhrasebookDetails } from 'src/modules/common/actions';
import PhrasebookDetails from 'src/containers/phrasebook/phrasebook-details';

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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogPhrasebookDetails = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isOpenDialogPhrasebookDetails, phrasebook } = useSelector(
    (state) => state.commonReducer,
  );

  const handleClose = () => {
    dispatch(closeDialogPhrasebookDetails());
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpenDialogPhrasebookDetails}
      fullWidth
      maxWidth="sm"
      className={classes.root}
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle>Phrasebook</DialogTitle>
      {phrasebook && <PhrasebookDetails phrasebook={phrasebook} />}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default DialogPhrasebookDetails;
