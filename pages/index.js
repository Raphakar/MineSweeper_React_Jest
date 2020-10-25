import Layout from '../components/layout';

// game components
import DeskController from '../components/deskController';

const Index = () => (
  <Layout title={`Minesweeper (active)`}>
    <DeskController />
  </Layout >
);

export default Index;
