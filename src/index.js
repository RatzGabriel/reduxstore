import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/createStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
