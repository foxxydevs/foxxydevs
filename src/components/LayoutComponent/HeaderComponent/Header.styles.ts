import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colours } from 'config/Colours.styles';

type NavProps = {
  active?: boolean;
};

export const Nav = styled.nav<NavProps>`
  height: 90px;
  margin: 10px 0px;
  background: ${({ active }) => (active ? `${colours.wheat}` : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  z-index: 2;
  padding-top: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;
