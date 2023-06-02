import "./rated.css";

const Rated = ({ rated }) => {
  return (
    <div className="rate">
      <input
        type="radio"
        id="star5"
        name="rate"
        value="5"
        readOnly
        checked={rated === 5 ? "checked" : ""}
      />
      <label title="text">5 stars</label>
      <input
        type="radio"
        id="star4"
        name="rate"
        value="4"
        readOnly
        checked={rated === 4 ? "checked" : ""}
      />
      <label title="text">4 stars</label>
      <input
        type="radio"
        id="star3"
        name="rate"
        value="3"
        readOnly
        checked={rated === 3 ? "checked" : ""}
      />
      <label title="text">3 stars</label>
      <input
        type="radio"
        id="star2"
        name="rate"
        readOnly
        value="2"
        checked={rated === 2 ? "checked" : ""}
      />
      <label title="text">2 stars</label>
      <input
        type="radio"
        id="star1"
        name="rate"
        value="1"
        readOnly
        checked={rated === 1 ? "checked" : ""}
      />
      <label title="text">1 star</label>
    </div>
  );
};

export default Rated;
