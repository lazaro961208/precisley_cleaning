import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/product-details/:id" element={<ProductDetails />} />

      {/* not found */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RenderRoutes;
