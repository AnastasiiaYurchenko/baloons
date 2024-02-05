// import Header from "./Header/Header";
import Layout from "./Layout/Layout";
import reviews from '../reviewsData.json';

export const App = () => {
  return (
    <Layout reviews = {reviews}>
      {/* <Header/> */}
    </Layout>
  );
};
