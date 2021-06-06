import { createMuiTheme } from '@material-ui/core';

import breakpoints from './breakpoint';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import custom from './custom';

export default createMuiTheme({
  breakpoints,
  palette,
  shadows,
  typography,
  custom,
});
