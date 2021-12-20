import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './config/Global.styles';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Global styles={globalStyles} />
      <App />
    </React.Fragment>
  </Router>,
  document.getElementById('__main')
);
