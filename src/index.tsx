import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/LayoutComponent/Layout';
import App from './router/App';
import './components/GlobalComponent/_Global.scss';

ReactDOM.render(
  <React.Fragment>
    <Layout>
      <App />
    </Layout>
  </React.Fragment>,
  document.getElementById('__main')
);
