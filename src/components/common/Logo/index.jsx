import React from "react";
import "./styles.css";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={require("./logo.png")} alt="" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
        <b>Restaurant & BBQ</b>
      </p>
    </div>
  );
};

export default Logo;
