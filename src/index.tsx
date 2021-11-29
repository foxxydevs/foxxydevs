import React from 'react';
import ReactDOM from 'react-dom';
import './components/Global/_Global.scss';
import App from './components/Layout/App';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.Fragment>
    <Layout>
      <App />
    </Layout>
  </React.Fragment>,
  document.getElementById('__main')
);
