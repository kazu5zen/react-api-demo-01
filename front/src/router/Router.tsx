import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/pages/Login';
import GraphDisplay from '../components/pages/GraphDisplay';
import Page404 from '../components/pages/Page404';

export const Router: FC = memo(() => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/graph-display">
      <GraphDisplay />
    </Route>
    <Route path="*">
      <Page404 />
    </Route>
  </Switch>
));

export default Router;
