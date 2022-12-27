import React from "react";
import Emptycart from "../../components/Cart/EmptyCart";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import "./styles.css";

const Cart = () => {
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      <Emptycart />
      <div className="orders">
        <h1 className="orders-heading">Your Orders</h1>
        <div className="orders-menu">
          <Menu list={menuItemsData} />
        </div>
        <h3 className="orders-total">Your Total $23</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
