import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const DEFAULT_LOGO_SIZE = 85;

const Logo = ({ logoStyle, logoVariant }) => {
  const classes = useStyles();
  return (
    <img
      className={clsx(classes.logo, logoStyle)}
      src={
        logoVariant === 'secondary'
          ? '/static/images/logo-secondary.png'
          : '/static/images/logo-primary.png'
      }
      alt="XinChao logo"
    />
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    width: DEFAULT_LOGO_SIZE,
    height: 'auto',
  },
}));

Logo.propTypes = {
  logoStyle: PropTypes.string,
  logoVariant: PropTypes.string,
};

export default Logo;
