import React from 'react';
import { Heading, HeadingWrapper, Img, Wrapper } from './404.styles';

const NotFounds = () => {
  return (
    <>
      <Wrapper>
        <Img src='/static/_404.png' />
      </Wrapper>
      <HeadingWrapper>
        <Heading>Oops.. Halaman yang kamu minta tidak ditemukan</Heading>
      </HeadingWrapper>
    </>
  );
};

export default NotFounds;
