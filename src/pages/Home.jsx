import Category from "../components/category/Category";
import DealGroup from "../components/dealgroup/DealGroup";
import Deal from "../components/deal/Deal";
import Trending from "../components/trending/Trending";
import Garden from "../components/garden/Garden";
const Home = () => {
  return (
    <>
      <Category />
      <Deal />
      <Trending />
      <DealGroup />
      <Garden />
    </>
  );
};

export default Home;
