import MenuNav from './style';
import Button from '../Button';
import Logo from '../../../assets/logoLight.svg';
import Text from '../../foundation/Text';

const Menu: React.FC = () => (
  <MenuNav.Wrapper>
    <MenuNav.LeftSide>
      <Logo />
    </MenuNav.LeftSide>
    <MenuNav.CentralSide>
      <li>
        <Text href="/" tag="a" variant="smallestException">
          Home
        </Text>
      </li>
      <li>
        <Text href="/faq" tag="a" variant="smallestException">
          Perguntas frequentes
        </Text>
      </li>
      <li>
        <Text href="/sobre" tag="a" variant="smallestException">
          Sobre
        </Text>
      </li>
    </MenuNav.CentralSide>
    <MenuNav.RightSide>
      <Button ghost>Entrar</Button>
      <Button>Cadastrar</Button>
    </MenuNav.RightSide>
  </MenuNav.Wrapper>
);

export default Menu;
