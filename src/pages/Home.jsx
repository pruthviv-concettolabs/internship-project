import Category from "../components/category/Category";
import DealGroup from "../components/dealgroup/DealGroup";
import Deal from "../components/deal/Deal";
import Trending from "../components/trending/Trending";
import Garden from "../components/garden/Garden";
import Electronics from "../components/electronics/Electronics";
import News from "../components/news/News";
const Home = () => {
  return (
    <>
      <Category />
      <Deal />
      <Trending />
      <DealGroup />
      <Garden />
      <News />
      <Electronics />
    </>
  );
};

export default Home;
