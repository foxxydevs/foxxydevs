import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404Pages/NotFound';
import HomePages from '../pages/HomePages/HomePages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePages} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
