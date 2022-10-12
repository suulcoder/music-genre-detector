import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './components/Home';
import { configureStore } from './store'

const { store, persistor } = configureStore();
window.document.title = 'Music Genre Detector';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home></Home>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);