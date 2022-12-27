import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const ButtonCartCount = ({ cartCount }) => {
  let navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
    </div>
  );
};

export default ButtonCartCount;
