import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/Productlist/ProductList";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
