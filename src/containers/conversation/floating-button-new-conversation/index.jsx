import React from 'react';
import PropTypes from 'prop-types';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { useDispatch } from 'react-redux';
import { openDialogNewConversation } from 'src/modules/common/actions';

const FloatingButtonNewConversation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [buttonWidth, setButtonWidth] = React.useState(180);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setIsOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setIsOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsOpenMenu(false);
    }
  }

  const handleClickMenuItem = (type) => {
    if (!type) return;
    dispatch(openDialogNewConversation(type));
  };

  React.useEffect(() => {
    let _buttonWidth;
    _buttonWidth = isOpenMenu ? 120 : 180;
    setButtonWidth(_buttonWidth);
  }, [isOpenMenu]);

  console.log('buttonWidth', buttonWidth);

  return (
    <div
      className={classes.root}
      style={{
        left: `calc(50% - ${buttonWidth / 2}px)`,
      }}
    >
      <Popper
        transition
        disablePortal
        open={isOpenMenu}
        role={undefined}
        anchorEl={anchorRef.current}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={isOpenMenu}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={() => handleClickMenuItem('private')}>
                    <ListItemIcon>
                      <PeopleIcon fontSize="small" />
                    </ListItemIcon>
                    Private Chat
                  </MenuItem>
                  <MenuItem onClick={() => handleClickMenuItem('group')}>
                    <ListItemIcon>
                      <LockIcon fontSize="small" />
                    </ListItemIcon>
                    Group Chat
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Button
        fullWidth
        disableElevation
        ref={anchorRef}
        color={isOpenMenu ? 'primary' : 'secondary'}
        variant="contained"
        startIcon={isOpenMenu ? <CloseIcon /> : <AddIcon />}
        className={classes.button}
        onClick={handleToggle}
        style={{ width: buttonWidth }}
      >
        {isOpenMenu ? 'Close' : 'New Conversation'}
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    right: 0,
    position: 'fixed',
    bottom: theme.spacing(2),
  },
  button: {
    borderRadius: 50,
  },
  paper: {
    padding: theme.spacing(2, 2, 6, 2),
    marginBottom: -44,
  },
}));

FloatingButtonNewConversation.propTypes = {
  onClick: PropTypes.func,
};

export default FloatingButtonNewConversation;
