import React from "react";
import logo1 from "../imgs/logo1.svg";
import iconHouse from "../imgs/icon-house.svg";
import iconUser from "../imgs/icon-user.svg";
import iconArrow from "../imgs/icon-arrow.svg";

const Sidebar = () => {
  const hideSidebar = () => {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList[1]) {
      return sidebar.classList.remove("show-sidebar");
    }
  };

  return (
    <div id="sidebar" className="sidebar-container">
      <div className="inner">
        <img className="logo" src={logo1} />
        <div className="user-name">
          <p>ALEXANDER CEBALLOS</p>
        </div>
        <div className="section">
          <img src={iconHouse} />
          <p>Dashboard</p>
        </div>
        <div className="section">
          <img src={iconUser} />
          <p>Clientes</p>
        </div>
        <img className="back" src={iconArrow} onClick={hideSidebar}/>
      </div>
    </div>
  );
};

export default Sidebar;
