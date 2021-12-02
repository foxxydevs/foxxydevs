import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';

type StyledBurgerProps = {
  open: boolean;
};

export const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  opacity: 0;
  height: 2rem;
  position: fixed;
  top: 50px;
  right: 30px;
  padding-top: 3px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? `${colours.orange}` : `${colours.brown}`};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-of-type(2) {
      width: ${({ open }) => (open ? '2rem' : '1.5rem')};
      margin-left: ${({ open }) => (open ? '0px' : '7px')};
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-of-type(3) {
      width: ${({ open }) => (open ? '2rem' : '1.2rem')};
      margin-left: ${({ open }) => (open ? '0px' : '12px')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      margin-top: ${({ open }) => (open ? '4px' : '0px')};
    }
  }

  @media screen and (max-width: 868px) {
    opacity: 1;
  }
`;
