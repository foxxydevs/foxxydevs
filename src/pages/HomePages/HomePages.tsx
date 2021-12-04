import About from 'components/ArtboardComponent/About/About';
import Welcome from 'components/ArtboardComponent/Welcome/Welcome';
import { Helmet } from 'react-helmet';

const HomePages = () => {
  return (
    <>
      <Helmet>
        <title>Selamat Datang | FoxxyDevs Indonesia</title>
      </Helmet>
      <Welcome />
      <About />
    </>
  );
};

export default HomePages;
