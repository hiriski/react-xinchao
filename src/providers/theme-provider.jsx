import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, ThemeProvider as Provider } from '@material-ui/core';
import theme from 'src/theme';

const ThemeProvider = ({ children }) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
