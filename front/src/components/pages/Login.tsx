import { FC, memo } from 'react';
import Footer from '../ui-parts/Footer/Footer';
import Header from '../ui-parts/Header/Header';
import LoginPanel from '../ui-parts/Panel/LoginPanel';
import './common.css';

export const Login: FC = memo(() => {
  return (
    <>
      <Header />
      <main className="container">
        <LoginPanel />
      </main>
      <Footer />
    </>
  );
});

export default Login;
