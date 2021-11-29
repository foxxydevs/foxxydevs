import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/404Pages/NotFound';
import HomePages from '../pages/HomePages/HomePages';

function App() {
  return (
    <Router>
      {/* Switch is replaced by Routes */}
      <Switch>
        <Route exact path='/'>
          <HomePages />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
