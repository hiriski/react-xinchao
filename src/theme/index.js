import { createMuiTheme } from '@material-ui/core';

import breakpoints from './breakpoint';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import spacing from './spacing';
import custom from './custom';

export default createMuiTheme({
  breakpoints,
  palette,
  shadows,
  typography,
  spacing,
  custom,
});
