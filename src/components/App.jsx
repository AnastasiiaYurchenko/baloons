import Layout from './Layout/Layout';
import reviews from '../reviewsData.json';
import Hero from './Hero/Hero';
import About from './About/About';
import Reviews from './Reviews/Reviews';
import Contacts from './Contacts/Contacts';

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
