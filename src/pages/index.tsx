import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';

const Home: React.FC = () => (
  <div
    style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Menu />
    <Footer />
  </div>
);

export default Home;
