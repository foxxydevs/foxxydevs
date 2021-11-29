import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from '../pages/HomePages/HomePages';

function App() {
  return (
    <Router>
      {/* Switch is replaced by Routes */}
      <Switch>
        <Route path='/'>
          <HomePages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
