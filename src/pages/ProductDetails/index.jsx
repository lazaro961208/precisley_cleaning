import "./productDetails.css";
import React from "react";
import Layout from "../../layout";
import BreadCrumb from "../../components/breadCrumb";
import ProductGalery from "../../components/productGalery";
import Button from "../../components/button";
import ProductTabs from "../../components/productTabs";
import RelatedProducts from "../../components/relatedProducts";
import Rated from "../../components/rated";
import Table from "../../components/table";

import { useParams } from "react-router-dom";
import axios from "axios";

import { FaRegHeart } from "react-icons/fa";

const baseUrl = "http://localhost:3001/products";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [display, setDisplay] = React.useState("none");

  const handeClick = () => {
    setCount(count + 1);
    setDisplay("");
    setTimeout(() => setDisplay("none"), 2000);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    axios.get(`${baseUrl}/${params.id}`).then((response) => {
      setProduct(response.data);
    }, []);
  }, [params.id]);

  return (
    <Layout>
      <BreadCrumb title={product.name} categorie={product.categorie} />
      <div className="content-product-top">
        <div className="product-gallery">
          <ProductGalery
            images={product.images}
            categorie={product.categorie}
          />
        </div>
        <div className="product-data">
          <p className="product-price">
            ${product.price && product.price.toFixed(2)}
          </p>
          <div className="product-ranking">
            <Rated rated={4} />
          </div>
          <p className="product-description">{product.description}</p>

          {product.stock > 0 ? (
            <div className="product-add-to-card">
              <input value={count} readOnly className="count" />
              <Button
                color="white"
                backgroundColor="#ec6454"
                w="200px"
                text="add to card"
                onClick={() => handeClick()}
              ></Button>
            </div>
          ) : (
            <div className="add-to-wish-list">
              <FaRegHeart /> <p>Add to Wishlist</p>
            </div>
          )}

          <div className="product-alert-add-to-card" style={{ display }}>
            <p className="product-add">
              Product added!{" "}
              <strong className="product-name-alert"> {product.name}</strong>
            </p>
          </div>

          <Table
            keys={["SKU", "Category", "Tags"]}
            values={[product.sku, product.categorie, "algo"]}
          />
        </div>
      </div>

      <div className="content-product-bottom">
        <ProductTabs
          product={product.name}
          description={product.description}
          additionalInformation={product.aditional_information}
          reviews={product.reviews}
        />
      </div>

      <RelatedProducts categorie={product.categorie} id={product.id} />
    </Layout>
  );
};

export default ProductDetails;
