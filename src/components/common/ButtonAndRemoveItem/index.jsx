import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonAndRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-positive">
          <i>
            <FontAwesomeIcon icon={faMinus} onClick={handleRemoveItem} />
          </i>
          <span>{quantity}</span>
          <i>
            <FontAwesomeIcon icon={faPlus} onClick={handleAddItem} />
          </i>
        </div>
      ) : (
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        </div>
      )}
    </div>
  );
};

export default ButtonAndRemoveItem;
