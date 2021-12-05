import React from 'react';
import ArboardDetail from 'components/ArtboardComponent/ArtboardDetail/ArboardDetail';
const Welcome = () => {
  return (
    <>
      <ArboardDetail
        btnColor='#4b9ed9'
        btnHover='#F06F49'
        padding='100px 0px'
        haveBackground
        redirect='https://github.com/foxxydevs'
        coverImage='/static/_learn.png'
        altText='hero_about'
        imgStarts={true}
        btnText='Mulai Belajar✍️'
        start=''
        headingOne='Ayo belajar, sekarang.'
        headingTwo='Dapatkan manfaatnya'
      />
    </>
  );
};

export default Welcome;
