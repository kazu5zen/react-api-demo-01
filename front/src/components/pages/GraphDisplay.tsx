import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Login: FC = memo(() => (
  <div>
    <h1>グラフ表示ページです</h1>
    <div>グラフ表示</div>
    <Link to="/">トップページへ戻る</Link>
  </div>
));

export default Login;
