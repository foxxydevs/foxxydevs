import React from 'react';
import ArboardDetail from '../ArtboardDetail/ArboardDetail';

const About = () => {
  return (
    <>
      <ArboardDetail
        haveBackground
        redirect='https://github.com/ioofy'
        coverImage='/static/_learn.png'
        altText='hero_about'
        imgStarts={true}
        btnText='Mulai Belajar✍️'
        primary={true}
        start=''
        headingOne='Ayo belajar, sekarang.'
        headingTwo='Dapatkan manfaatnya'
      />
    </>
  );
};

export default About;
