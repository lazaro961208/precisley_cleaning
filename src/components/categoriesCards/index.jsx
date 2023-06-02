import "./categoriesCards.css";
import list from "../../utils/categories/list";

const CategoriesCards = ({ handleClick }) => {
  return (
    <div className="categories-card">
      <div className="categories-card-content">
        {list.map((e, index) => {
          return (
            <div
              key={index}
              className="categorie-card"
              onClick={() => handleClick(e.categorie)}
            >
              <img src={`assets/categories/${e.img}.png`} alt={e.img} />

              <p className="font"> {e.name} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesCards;
