import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useLoginUser from '../components/hooks/useLoginUser';

export const PrivateRoute: FC<RouteProps> = (props) => {
  const { component, exact, path } = props;
  const { loginUser } = useLoginUser();

  return loginUser?.isAuthenticated ? <Route exact={exact} path={path} component={component} /> : <Redirect to="/" />;
};
export default PrivateRoute;
