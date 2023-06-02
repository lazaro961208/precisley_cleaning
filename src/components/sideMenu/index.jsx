import "./sideMenu.css";
import NewsletterCard from "../newsletter";
import BestSellersCard from "../bestSellersCard";

import Button from "../button";

import { FaSearch } from "react-icons/fa";

const SideMenu = ({ handleClick, products }) => {
  let count = [5, 4, 3, 3, 2];

  return (
    <div className="side-menu">
      <div className="form-search">
        <input type="text" placeholder="Search products..." />
        <Button
          backgroundColor="#e5735b"
          color="white"
          tyleDotted={{ height: "40%" }}
          icon={<FaSearch fontSize="12" />}
        ></Button>
      </div>
      <div className="categorie-list">
        <div className="title-categorie-list">
          <h4 className="categorie-title">Categories</h4>
        </div>
        <div className="frame">
          {items.map((e, index) => {
            return (
              <div key={index} className="categorie-item">
                <p
                  className="categorie-item-li"
                  key={index}
                  onClick={() => handleClick(e)}
                >
                  {e}
                </p>
                <p>({count[index]})</p>
              </div>
            );
          })}
        </div>
      </div>
      <BestSellersCard products={products} />
      <NewsletterCard />
    </div>
  );
};

const items = ["for babies", "for boys", "for girls", "for home", "for play"];

export default SideMenu;
