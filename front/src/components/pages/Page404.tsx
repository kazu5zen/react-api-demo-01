import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Page404: FC = memo(() => (
  <main>
    <h1>ページが見つかりません</h1>
    <Link to="/">トップページへ戻る</Link>
  </main>
));

export default Page404;
