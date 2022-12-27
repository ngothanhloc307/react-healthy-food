import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Emptycart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={require("./emptycart.png")} alt="empty" />
      <button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Shop now
      </button>
    </div>
  );
};

export default Emptycart;
