import { FC, memo } from 'react';
import Footer from '../ui-parts/Footer/Footer';
import Header from '../ui-parts/Header/Header';
import GraphDisplayPanel from '../ui-parts/Panel/GraphDisplayPanel';
import './common.css';

export const GraphDisplay: FC = memo(() => {
  return (
    <>
      <Header />
      <main className="container">
        <GraphDisplayPanel />
      </main>
      <Footer />
    </>
  );
});

export default GraphDisplay;
