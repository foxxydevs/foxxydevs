import React from 'react';
import { NavItem, NavLinks, NavMenu } from './SideMenu.styles';

type SideMenuProps = {
  Open: boolean;
};

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { Open } = props;
  return (
    <>
      <NavMenu open={Open}>
        <NavItem>
          <NavLinks to='/'>😎 Tentang Kita</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='/'>📙 Dokumentasi</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='/'>📨 Kontak</NavLinks>
        </NavItem>
      </NavMenu>
    </>
  );
};

export default SideMenu;
