import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
