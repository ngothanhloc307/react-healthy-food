import React from "react";
import "./styles.css";
import MenuItem from "./MenuItem";
const Menu = ({ list }) => {
  return (
    <main>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
