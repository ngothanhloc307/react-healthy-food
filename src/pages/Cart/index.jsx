import React from "react";
import { createStructuredSelector } from "reselect";
import Emptycart from "../../components/Cart/EmptyCart";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import "./styles.css";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { connect } from "react-redux";

const Cart = ({ cartCount, cartList, cartTotal }) => (
  // console.log(cartCount, cartList, cartTotal);
  <>
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <Emptycart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total ${cartTotal}</h3>
        </div>
      )}

      <Footer />
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
