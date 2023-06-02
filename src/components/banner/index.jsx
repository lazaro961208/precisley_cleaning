import "./banner.css";
import Button from "../button";

const Banner = () => {
  const style = {
    backgroundImage: "url(assets/banner/slider.jpg)",
  };

  return (
    <div className="banner">
      <div className="right-banner" style={style}>
        <h1 className="right-banner-title">JUMPSUIT</h1>
        <h4 className="right-banner-subtitle">
          Confortable cohtes for your title habies
        </h4>
        <div>
          <Button text="Discover" style={{ marginTop: 10 }} />
        </div>
      </div>

      <div className="left-banner">
        <img src="assets/banner/girls-power.jpg" alt="" />
        <h1 className="left-banner-title">Girl Power</h1>
        <h4 className="left-banner-subtitle">For a coloful summer</h4>
      </div>
    </div>
  );
};

export default Banner;
