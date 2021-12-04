import React from 'react';
import ArboardDetail from '../ArtboardDetail/ArboardDetail';

const About = () => {
  return (
    <>
      <ArboardDetail
        btnColor='#F06F49'
        btnHover='#4b9ed9'
        padding='80px 0'
        description='Web ini adalah web opensource yang mana konten didalamnya berisi informasi, tutorial atau dokumentasi yang membantu pemula dalam pembelajaran ui framework seperti react atau konten konten lainnya.'
        isReverse
        redirect='https://github.com/foxxydevs'
        coverImage='/static/_about.png'
        altText='hero_about'
        imgStarts={true}
        btnText='Mulai Berkontribusi sekarang'
        start=''
        headingOne='Siapa kita?'
      />
    </>
  );
};

export default About;
