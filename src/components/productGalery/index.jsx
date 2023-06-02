import { useEffect, useState } from "react";

import "./productGalery.css";

const ProductGalry = ({ images, categorie }) => {
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({});
  const [display, setDisplay] = useState("none");
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(400);
  const [y1, setY1] = useState(400);
  const [y2, setY2] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const hanldeClick = (index) => {
    setIndex(index);
  };

  const onMouseEnter = () => {
  //  setDisplay("");

    let x = mousePos.x;
    let y = mousePos.y;

    setX1(x - (x % 500));
    setX2(x + (x % 500));
    setY1(y + (y % 600));
    setY2(y - (y % 600));
  };

  return images ? (
    <div className="gallery">
      <div className="zoom-area">
        <img
          src={`../assets/img-products/${categorie}/${images[index]}.jpg`}
          width="500"
          height="600"
          onMouseLeave={()=>setDisplay('none')}
          onMouseEnter={() => onMouseEnter()}
          onMouseMove={() => onMouseEnter()}
          className="img"
          alt="img"
        />

        <img
          style={{ clip: `rect(${x1}px, ${y1}px, ${x2}px, ${y2}px)`, display }}
          src={`../assets/img-products/${categorie}/${images[index]}.jpg`}
          width="500"
          height="600"
          className="img-zoom"
          alt="img"
        />
      </div>

      <div className="other-images">
        {images.map((e, i) => {
          return (
            index !== i && (
              <img
                onClick={() => hanldeClick(i)}
                key={i}
                src={`../assets/img-products/${categorie}/${e}.jpg`}
                alt="img"
              />
            )
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductGalry;
