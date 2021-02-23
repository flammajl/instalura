import Button from '../components/commons/Button';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';
import Text from '../components/foundation/Text';

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
    <div>
      <Text
        variant="title"
        tag="h1"
        color="tertiary"
        propStyle={{
          xs: {
            textAlign: 'center',
          },
          md: {
            textAlign: 'left',
          },
        }}
      >
        Compartilhe momentos e conecte-se com amigos
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary"
        lightColor
        propStyle={{
          xs: {
            textAlign: 'center',
          },
          md: {
            textAlign: 'left',
          },
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s.
      </Text>

      <Button
        propStyle={{
          xs: {
            margin: 'auto',
            display: 'block',
          },
          md: {
            margin: 'initial',
          },
        }}
      >
        Cadastrar
      </Button>
    </div>
    <Footer />
  </div>
);

export default Home;
