import { useState } from "react";
import "./productTabs.css";
import Button from "../../components/button";
import Table from "../../components/table";
import Rating from "../../components/rated";

const ProductTabs = ({
  description,
  additionalInformation,
  reviews,
  product,
}) => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="product-tabs">
      <div className="product-tabs-buttons">
        <div className="tab-button">
          <button className="button" onClick={() => handleClick(0)}>
            Description
          </button>
          <img
            alt="img"
            src="/assets/border.png"
            style={{
              width: index === 0 ? "100px" : "0px",
            }}
          ></img>
        </div>
        <div className="tab-button">
          <button className="button" onClick={() => handleClick(1)}>
            Additional Information
          </button>
          <img
            alt="img"
            style={{
              width: index === 1 ? "100px" : "0px",
            }}
            src="/assets/border.png"
          ></img>
        </div>
        <div className="tab-button">
          <button className="button" onClick={() => handleClick(2)}>
            reviews ({reviews && reviews.length})
          </button>
          <img
            alt="img"
            src="/assets/border.png"
            style={{
              width: index === 2 ? "100px" : "0px",
            }}
          ></img>
        </div>
      </div>
      <div className="product-tabs-content">
        {index === 0 && <p className="description">{description}</p>}

        {index === 1 && (
          <Table
            keys={["Color", "Material", "Age"]}
            values={[
              additionalInformation.color,
              additionalInformation.material,
              additionalInformation.age,
            ]}
          />
        )}

        {index === 2 && (
          <div className="reviews-content">
            <h3 className="reviews-title">
              {reviews && reviews.length} review for {product}
            </h3>

            {reviews.map((e, index) => {
              return <CardReview review={e} key={index} />;
            })}

            <ReviewsForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;

const ReviewsForm = () => {
  return (
    <div className="add-review">
      <h3 className="title"> Add a review</h3>

      <div className="content-review">
        <h3 className="info">
          Your email address will not published. Requerid fields are marked*
        </h3>

        <div className="rating">
          <p>Your Rating*</p>
          <Rating rated={0} />
        </div>

        <div className="your-review">
          <textarea
            className="text-area"
            placeholder="Your review"
            rows="10"
          ></textarea>
        </div>

        <div className="form">
          <div className="form-control">
            <label>Name*</label>
            <input className="form-control-input" type="text" />
          </div>
          <div className="form-control">
            <label>Email*</label>
            <input className="form-control-input" type="text" />
          </div>
        </div>
        <div className="form-submit">
          <Button
            backgroundColor="#ec6454"
            color="white"
            text="submit"
            w="150px"
            style={{ marginTop: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

const CardReview = ({ review }) => {
  return (
    <div className="card-review">
      <div className="avatar">
        <img src="/assets/products/for boys/1.jpg" alt="aaa" />
      </div>
      <div className="card-body">
        <div className="top-info">
          <p className="name">{review.name}</p>
          <p className="date">{review.date}</p>
        </div>
        <div className="rating-info">
          <Rating rated={review.rated} />
        </div>
        <div className="review-info">{review.review}</div>
        <div className="footer-info">Rated 5 out of 5</div>
      </div>
    </div>
  );
};
