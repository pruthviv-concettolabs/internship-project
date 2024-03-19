import Category from "../components/homeGroup/category/Category";
import DealGroup from "../components/homeGroup/dealgroup/DealGroup";
import Deal from "../components/homeGroup/deal/Deal";
import Trending from "../components/homeGroup/trending/Trending";
import Garden from "../components/homeGroup/garden/Garden";
import Electronics from "../components/homeGroup/electronics/Electronics";
import News from "../components/homeGroup/news/News";
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
