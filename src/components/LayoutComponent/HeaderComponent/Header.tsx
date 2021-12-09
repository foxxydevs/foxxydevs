import { Nav, NavLogo, NavbarContainer, LogoImage } from './Header.styles';
import Burger from './BurgerMenu/Burger';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav active={scroll}>
        <NavbarContainer>
          <NavLogo to='/'>
            <LogoImage src='/static/foxxydevs.png' alt='logo' />
          </NavLogo>
          <Burger />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
