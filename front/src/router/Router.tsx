import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/pages/Login';
import GraphDisplay from '../components/pages/GraphDisplay';
import Page404 from '../components/pages/Page404';
import { LoginUserProvider } from '../providers/LoginUserProvider';
import { PrivateRoute } from './PrivateRoute';

export const Router: FC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/graph-display" component={GraphDisplay} />
      </LoginUserProvider>
      <Route path="*" component={Page404} />
    </Switch>
  );
});

export default Router;
