import "./home.css";

import React from "react";
import Layout from "../../layout";
import Banner from "../../components/banner";
import CategoriesCards from "../../components/categoriesCards";
import SideMenu from "../../components/sideMenu";
import ProductCard from "../../components/productCard";
import InstagramKidsrus from "../../components/instagramKidsrus";

import axios from "axios";

const baseUrl = "http://localhost:3001/products";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [categorie, setCategorie] = React.useState("");
  const [cookies, setCookies] = React.useState(true);
  const [alert, setAlert] = React.useState(false);

  const handleClick = (c) => {
    setCategorie(c);
  };

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data);
    }, []);
  }, []);

  return (
    <>
      {alert && (
        <div className="alert">
          <p>20% off all kidswer + free shiping when you spend $60 or more</p>
        </div>
      )}
      <Layout>
        <Banner />
        <CategoriesCards handleClick={handleClick} />

        <div className="new-arrivals">
          <h1>New Arrivals</h1>
          <img src="assets/border.png" alt="img" />
        </div>

        {products.length > 0 && (
          <div className="content">
            <SideMenu handleClick={handleClick} products={products} />

            <div className="product-list">
              {products
                .filter((e) => {
                  return categorie === "" ? true : e.categorie === categorie;
                })
                .reverse()
                .splice(0, 9)
                .map((e) => {
                  return (
                    <ProductCard
                      key={e.id}
                      id={e.id}
                      name={e.name}
                      categorie={e.categorie}
                      img={e.images}
                      price={e.price}
                      stock={e.stock}
                    />
                  );
                })}
            </div>
          </div>
        )}

        <InstagramKidsrus />
      </Layout>
      {cookies && (
        <div className="cookies">
          <p className="text">
            This website uses cookies to improve your experience. Well assume
            you are ok with this, but you can opt-out if you wish{" "}
          </p>
          <button className="button" onClick={() => setCookies(false)}>
            {" "}
            Accept
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
