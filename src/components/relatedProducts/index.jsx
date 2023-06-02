import React from "react";
import "./relatedProducts.css";
import ProductCard from "../../components/productCard";

import axios from "axios";

const baseUrl = "http://localhost:3001/products";

const RelatedProducts = ({ categorie, id }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data);
    }, []);
  }, []);

  return (
    <div className="related">
      <div className="related-header">
        <h1 className="related-title"> Related Products</h1>
        <img src="/assets/border.png" alt="img" />
      </div>
      <div className="related-roduct">
        {products
          .filter((e) => {
            return e.categorie === categorie && id !== e.id;
          })
          .slice(0, 4)
          .map((e, index) => {
            return (
              <ProductCard
                key={index}
                id={e.id}
                name={e.name}
                categorie={e.categorie}
                img={e.images}
                price={e.price}
                rated={e.rated}
                stock={e.stock}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProducts;
