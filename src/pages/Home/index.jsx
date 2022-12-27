import React from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Banner from "../../components/Home/Banner";

import "./styles.css";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Menu */}
      <Menu list={menuItemsData} />
      {/* Footer */}
      <Footer />
      {/* Cart Count Button */}
      <ButtonCartCount />
    </div>
  );
};

export default Home;
