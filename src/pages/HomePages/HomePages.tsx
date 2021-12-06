import About from 'components/PagesComponents/About/About';
import Accordions from 'components/PagesComponents/Accordions/Accordions';
import Contact from 'components/PagesComponents/Contact/Contact';
import Welcome from 'components/PagesComponents/Welcome/Welcome';
import { Helmet } from 'react-helmet';

const HomePages = () => {
  return (
    <>
      <Helmet>
        <title>Selamat Datang | FoxxyDevs Indonesia</title>
      </Helmet>

      <Welcome />
      <About />
      <Contact />
      <Accordions />
    </>
  );
};

export default HomePages;
