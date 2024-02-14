import Layout from './Layout/Layout';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Reviews from '../sections/Reviews/Reviews';
import Contacts from '../sections/Contacts/Contacts';

import reviews from '../reviewsData.json';

export const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Reviews reviews={reviews} />
      <Contacts />
    </Layout>
  );
};
