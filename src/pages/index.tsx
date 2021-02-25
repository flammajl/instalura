import Image from 'next/image';
import Box from '@/style/layout/Box';
import Button from '../components/commons/Button';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';
import Text from '../components/foundation/Text';
import Grid from '../style/layout/Grid';
import Phones from '../assets/phones.png';

const Home: React.FC = () => (
  <Box
    propStyle={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Menu />
    <Grid.Container>
      <Grid.Row
        propStyle={{
          xs: {
            gridColumn: '1 / end',
          },
          md: {
            gridColumn: '2 / end',
          },
        }}
      >
        <Grid.Col
          propStyle={{
            md: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <div style={{ maxWidth: '470px' }}>
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
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
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
        </Grid.Col>
        <Grid.Col>
          {/* <img
            style={{
              display: 'block',
              margin: 'auto',
              maxWidth: '100%',
              minWidth: '300px',
            }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            alt="img"
          /> */}
          <Image src={Phones} width={386} height={575} />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
    <Footer />
  </Box>
);

export default Home;
