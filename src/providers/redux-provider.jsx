import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from 'src/config-store';

const { store, persistor } = configStore();

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReduxProvider;
