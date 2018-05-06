import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fontawesome from '@fortawesome/fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';

import store from './store';
import App from './containers/App/App';
import './Index.scss';

fontawesome.library.add(faCheck, faExclamationTriangle);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

