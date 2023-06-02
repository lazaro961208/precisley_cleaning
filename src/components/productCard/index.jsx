import "./productCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import Rated from "../rated";

import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ id, name, categorie, img, price, stock, rated }) => {
  const [imgName, setImgName] = React.useState(img[0]);
  const [visibility, setVisibility] = React.useState("hidden");

  const otherImage = () => {
    return img.length > 1 ? setImgName(img[1]) : setImgName(img[0]);
  };

  const navigate = useNavigate();

  const onMouseEnter = () => {
    otherImage();
    setVisibility("");
  };

  const onMouseLeave = () => {
    setVisibility("hidden");

    setImgName(img[0]);
  };

  const handleOnClick = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div
      className="card"
      onClick={handleOnClick}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <div>
        {stock === 0 && <div className="out-of-stock">Out of Stock</div>}
        <img
          className="card-img"
          src={
            `assets/img-products/${categorie}/${imgName}.jpg`
              ? `/assets/img-products/${categorie}/${imgName}.jpg`
              : `/assets/img-products/${categorie}/${img}.jpg`
          }
          alt="img"
        />

        <div className="container-buttons">
          <Button
            style={{ position: "relative", marginTop: "-60px" , visibility}}
            className="button"
            text={stock > 0 ? "add to card" : ""}
            color="white"
            backgroundColor="#ec6454"
            icon1={<FaRegHeart />}
            icon2={<FaSearch />}
            twoicons={stock > 0}
            icon={<FaRegHeart />}
          />
        </div>
      </div>

      <div className="body-card">
        <p className="categorie">{categorie}</p>
        <p className="product">{name}</p>
        {stock !== 0 && <p className="price">${price && price.toFixed(2)}</p>}
        {rated && <Rated rated={3} />}
      </div>
    </div>
  );
};

export default ProductCard;
