// import Header from "./Header/Header";
import Layout from "./Layout/Layout";
import reviews from '../reviewsData.json';
import Hero from "./Hero/Hero";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Reviews reviews = {reviews}/>
    </Layout>
  );
};
