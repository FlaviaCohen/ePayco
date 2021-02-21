import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../sass/home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data.slice(0,20)));
  }, []);

  return (
    <div className="home-container">
      <p className="title">Información del formulario</p>
      <p className="subtitle">
        Ingrese el título y la descripción que visualizarán los usuarios durante
        el proceso de pago
      </p>
      <form className="form">
        <div className="row">
          <div className="field-container">
            <label>Nombre <p>*</p></label>
            <input></input>
          </div>
          <div className="field-container">
            <label>Apellido <p>*</p></label>
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="field-container">
            <label>Seleccione un país <p>*</p></label>
            <select>
              {countries && countries.length ? countries.map(country => <option key={country.alpha2Code}>{country.name}</option>) : null}
            </select>
          </div>
          <div className="field-container">
            <label>Número de documento <p>*</p></label>
            <input></input>
          </div>
        </div>
        <div className="btns">
          <button className="send-btn"><p>enviar</p></button>
          <button className="cancel-btn"><p>Cancelar</p></button>
        </div>
      </form>
    </div>
  );
};

export default Home;
