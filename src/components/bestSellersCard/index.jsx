import "./bestSellersCard.css";
import Rated from "../../components/rated";

export default function BestSellersCard({ products }) {
  return (
    <>
      <h2 className="best-sellers-title">Best Sellers</h2>
      <div className="best-sellers-list">
        {products.slice(0, 4).map((e, index) => {
          return <Card key={index} item={e} />;
        })}
      </div>
    </>
  );
}

function Card({ item }) {
  return (
    item && (
      <div className="best-sellers-card">
        <div className="best-sellers-card-img">
          <img
            src={`assets/img-products/${item.categorie}/${item.images[0]}.jpg`}
            alt="aaa"
          />
        </div>

        <div className="best-sellers-card-body">
          <div className="best-sellers-card-body-title">
            <p>{item.name}</p>
          </div>
          <div className="best-sellers-card-body-ranking">
            <Rated rated={item.rated} />
          </div>
          <div className="best-sellers-card-body-price">
            <p> $ {item.price && item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    )
  );
}
