import { FC, memo } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children = '都道府県別の総人口推移グラフ閲覧' } = props;

  const headerStyle = {
    backgroundColor: 'lightgreen',
    margin: 0,
  };
  return (
    <header>
      <h1 style={headerStyle}>{children}</h1>
    </header>
  );
});

export default Header;
