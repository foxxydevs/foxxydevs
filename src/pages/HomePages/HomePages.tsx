import { Helmet } from 'react-helmet';
import About from '../../components/ArtboardComponent/About/About';

const HomePages = () => {
  return (
    <>
      <Helmet>
        <title>Selamat Datang | RTSX Bahasa Indonesia</title>
      </Helmet>
      <About />
    </>
  );
};

export default HomePages;
