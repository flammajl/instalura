import { MenuWrapper } from './style';
import Button from '../Button';
import Logo from '../../../assets/logoLight.svg';
import Text from '../../foundation/Text';

const Menu: React.FC = () => (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
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
    </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
      <Button ghost>Entrar</Button>
      <Button>Cadastrar</Button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;
