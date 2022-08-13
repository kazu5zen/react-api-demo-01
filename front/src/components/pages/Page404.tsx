import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Page404: FC = memo(() => (
  <div>
    <h1>404ページです</h1>
    <Link to="/">トップページへ戻る</Link>
  </div>
));

export default Page404;
