import { Nav, NavLogo, NavbarContainer, LogoImage } from './Header.styles';
import Burger from './BurgerMenu/Burger';

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <LogoImage src='/static/_Logo.png' alt='logo' />
          </NavLogo>
          <Burger />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
