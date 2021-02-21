import React from "react";
import logo1 from "../imgs/logo1.svg";
import iconHouse from "../imgs/icon-house.svg";
import iconUser from "../imgs/icon-user.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img className="logo" src={logo1} />
      <div className="user-name">
        <p>ALEXANDER CEBALLOS</p>
      </div>
      <div className="section">
          <img src={iconHouse}/>
          <p>Dashboard</p>
      </div>
      <div className="section">
          <img src={iconUser}/>
          <p>Clientes</p>
      </div>
    </div>
  );
};

export default Sidebar;
