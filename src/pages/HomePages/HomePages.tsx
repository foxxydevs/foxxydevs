import About from 'components/ArtboardComponent/About/About';
import { Helmet } from 'react-helmet';

const HomePages = () => {
  return (
    <>
      <Helmet>
        <title>Selamat Datang | FoxxyDevs Indonesia</title>
      </Helmet>
      <About />
    </>
  );
};

export default HomePages;
