import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../common/Logo";
import "./styles.css";

const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicous food for your cravings</h1>
          <p>We Made fresh ans healthy meals with different recipies</p>
          <button onClick={handleScrollMenu}>
            View Menu
            <i>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </i>
          </button>
        </div>
      </div>
      <img src={require("./banner.png")} art="banner" className="header-img" />
    </header>
  );
};

export default Banner;
