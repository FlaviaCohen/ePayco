import React from "react";
import iconMenu from "../imgs/icon-menu.svg";

const Header = () => {

  const handleSidebar = () => {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList[1]) {
      return sidebar.classList.remove("show-sidebar");
    }
    return sidebar.classList.add("show-sidebar");
  };

  return (
    <div className="header-container">
      <img src={iconMenu} onClick={handleSidebar} />
    </div>
  );
};

export default Header;
