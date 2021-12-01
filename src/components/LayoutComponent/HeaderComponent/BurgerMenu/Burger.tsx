import { useState } from 'react';
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
    </>
  );
};

export default Burger;
