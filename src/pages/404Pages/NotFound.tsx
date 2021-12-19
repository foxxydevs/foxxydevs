import NotFounds from 'components/PagesComponents/NotFound/404';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <NotFounds />
    </>
  );
};

export default NotFound;
