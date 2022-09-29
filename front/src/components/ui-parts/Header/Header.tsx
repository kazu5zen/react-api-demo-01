import { FC, memo } from 'react';
import './Header.css';

export const Header: FC = memo(() => {
  return (
    <header>
      <h1 className="header">グラフ閲覧デモ</h1>
    </header>
  );
});

export default Header;
