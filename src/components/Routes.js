import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from '../layouts/Home';
import Quotes from '../layouts/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
