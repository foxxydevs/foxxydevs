import { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import { StyledBurger } from './Burger.styles';

const Burger = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={Open} onClick={() => setOpen(!Open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideMenu Open={Open} />
    </>
  );
};

export default Burger;
