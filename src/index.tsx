import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/LayoutComponent/Layout';
import App from './router/App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './components/GlobalComponent/Global.styles';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('__main')
);
