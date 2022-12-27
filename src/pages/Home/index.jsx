import React, { useRef } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Banner from "../../components/Home/Banner";

import "./styles.css";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* Banner */}
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* Menu */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* Footer */}
      <Footer />
      {/* Cart Count Button */}
      <ButtonCartCount />
    </div>
  );
};

export default Home;
