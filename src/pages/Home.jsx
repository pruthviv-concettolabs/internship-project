import Category from "../components/category/Category";
import DealGroup from "../components/dealgroup/DealGroup";
import Deals from "../components/deals/Deals";
import Trending from "../components/trending/Trending";
const Home = () => {
  return (
    <>
      <Category />
      <Deals />
      <Trending />
      <DealGroup />
    </>
  );
};

export default Home;
