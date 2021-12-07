import React from 'react';
import Footers from './FooterComponent/Footer';
import Header from './HeaderComponent/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className='wrapper-all css-y87eh5'>{props.children}</div>
      <Footers />
    </>
  );
};

export default Layout;
