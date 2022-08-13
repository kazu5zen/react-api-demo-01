import { FC, memo } from 'react';
import { useHistory } from 'react-router-dom';

export const Login: FC = memo(() => {
  const history = useHistory();

  const onClickLogin = () => history.push('/graph-display');

  return (
    <div>
      <h1>ログインページです</h1>
      <button type="button" onClick={onClickLogin}>
        ログイン
      </button>
    </div>
  );
});

export default Login;
