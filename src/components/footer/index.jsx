import "./footer.css";
import list from "../../utils/footer/list";
import logo from "../../static/logo-footer.png";
import Button from "../../components/button";

import { MdKeyboardArrowUp } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <img src={logo} alt="Logo" />
      <div className="nav-footer">
        {" "}
        {list.map((e, index) => {
          return (
            <a key={index} className="item-footer" href={e.href}>
              {e.title}
            </a>
          );
        })}
      </div>
      <div className="social">
        <div>
          <GrFacebookOption fontSize="25" />
        </div>
        <div>
          <ImInstagram fontSize="25" />
        </div>
        <div>
          {" "}
          <AiOutlineTwitter fontSize="25" />
        </div>
      </div>

      <div className="botton-text">
        <a href="/" className="button-text-link">
          {" "}
          Privacy Policy /
        </a>
        <p className="text">This is a sample website - cmsmaters 2022 / All Right Reserved </p>
      </div>

      <div className="container-button">
        <div>
          <Button
            style={{ position: "absolute", right: "20px", marginTop: "-10px" }}
            backgroundColor="#f5a460"
            color="white"
            styleDotted={{ padding: "5px 5px" }}
            onClick={handleClick}
            icon={<MdKeyboardArrowUp />}
          />
        </div>
      </div>

     
    </div>
  );
};

export default Footer;
