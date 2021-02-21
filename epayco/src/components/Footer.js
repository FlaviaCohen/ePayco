import React from "react";
import logo2 from "../imgs/logo2.svg";
import logo3 from "../imgs/logo3.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="text">
        ePayco © 2011 - 2019 todos los derechos reservados.
      </p>
      <div className="logos-container">
        <img src={logo2} />
        <img src={logo3} />
      </div>
    </div>
  );
};

export default Footer;
