import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/LayoutComponent/Layout';
import App from './router/App';
import './components/GlobalComponent/_Global.scss';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('__main')
);
