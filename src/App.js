import React from 'react';
import logo from './logo.svg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const App = () => {
  return (
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h3">
        Edit <code>src/App.js</code> and save to reload.
      </Typography>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  );
};

export default App;
