import "./header.css";
import "font-awesome/css/font-awesome.min.css";
import list from "../../utils/header/list";
import logo from "../../static/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { TfiSearch } from "react-icons/tfi";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="app-header">
      <div className="top-header">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-bar">
        {list.map((e, index) => {
          return (
            <div key={index} className="link">
              <a
                className="item"
                style={{ color: location.pathname === e.href ? "#e5735b" : "" }}
                href={e.href}
              >
                {" "}
                {e.title}
              </a>

              <img
                src="assets/border.png"
                alt="img"
                style={{
                  display: location.pathname === e.href ? "block" : "none",
                }}
              />
            </div>
          );
        })}

        <div className="buttons">
          <FaRegHeart className="icons" color="gray" />
          <div className="cart">
            <RiShoppingCartLine fontSize="20" className="icons" color="gray" />
            <span className="span">2</span>
          </div>
          <TfiSearch className="icons" color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Header;
