import { FC, memo } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Footer: FC<Props> = memo((props) => {
  const { children = '© 2022 kazu5zen' } = props;

  const headerStyle = {
    backgroundColor: 'lightgreen',
    margin: 0,
  };
  return (
    <footer>
      <p style={headerStyle}>{children}</p>
    </footer>
  );
});

export default Footer;
