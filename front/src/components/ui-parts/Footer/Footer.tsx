import { FC, memo } from 'react';
import './Footer.css';

export const Footer: FC = memo(() => {
  return (
    <footer>
      <p className="footer">© 2022 kazu5zen</p>
    </footer>
  );
});

export default Footer;
