import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';
import { Link } from 'react-router-dom';

type NavMenuProps = {
  open: boolean;
};

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 1.1rem;

  @media screen and (max-width: 868px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: ${colours.wheat};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 5rem;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-left: 20px;
  vertical-align: middle;

  @media screen and (max-width: 868px) {
    padding: 10px 15px;
    font-size: 1.2rem;
  }
`;

export const NavLinks = styled(Link)`
  color: ${colours.brown};
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
  font-family: 'AllianceM';

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 0px;
    transition: 0.2s ease-in-out;
    right: 0;
    left: auto;
    background-color: ${colours.orange};
    bottom: 15px;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: 868px) {
    margin: 50px 0px;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
