import { MenuWrapper } from './style';
import Button from '../Button';
import Logo from '../../../assets/logoLight.svg';

const Menu: React.FC = () => (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/faq">Perguntas Frequentes</a>
      </li>
      <li>
        <a href="/sobre">Sobres</a>
      </li>
    </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
      <Button ghost>Entrar</Button>
      <Button>Cadastrar</Button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;
