import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from 'pages/404Pages/NotFound';
import HomePages from 'pages/HomePages/HomePages';
import Layout from 'components/LayoutComponent/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={HomePages} exact />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
