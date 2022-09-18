import { FC, memo } from 'react';
import Footer from '../ui-parts/Footer/Footer';
import Header from '../ui-parts/Header/Header';
import GraphDisplayPanel from '../ui-parts/Panel/GraphDisplayPanel';

export const GraphDisplay: FC = memo(() => {
  return (
    <>
      <Header />
      <main>
        <GraphDisplayPanel />
      </main>
      <Footer />
    </>
  );
});

export default GraphDisplay;
