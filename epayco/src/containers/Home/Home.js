import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import FormModal from "../../components/FormModal.js";
import "../../sass/home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [document, setDocument] = useState("");
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && surname && country && document) {
      setSuccess(true);
    }
    else{
      setSuccess(false)
    }
    setModal(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleDocument = (e) => {
    setDocument(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data.slice(0, 20)));
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
            <label>
              Nombre <p>*</p>
            </label>
            <input onChange={handleName} value={name}></input>
          </div>
          <div className="field-container">
            <label>
              Apellido <p>*</p>
            </label>
            <input onChange={handleSurname} value={surname}></input>
          </div>
        </div>
        <div className="row">
          <div className="field-container">
            <label>
              Seleccione un país <p>*</p>
            </label>
            <select onChange={(e) => setCountry(e.target.value)}>
              {countries && countries.length
                ? countries.map((country) => (
                    <option key={country.alpha2Code} value={country.name}>
                      {country.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="field-container">
            <label>
              Número de documento <p>*</p>
            </label>
            <input onChange={handleDocument} value={document}></input>
          </div>
        </div>
        <div className="btns">
          <button className="send-btn" onClick={handleSubmit}>
            <p>enviar</p>
          </button>
          <button className="cancel-btn">
            <p>Cancelar</p>
          </button>
        </div>
      </form>
      <Modal
        isOpen={modal}
        onRequestClose={()=> setModal(false)}
        //className="form-modal"
        overlayClassName="custom-overlay"
      >
        <FormModal success={success} setModal={setModal}/>
      </Modal>
    </div>
  );
};

export default Home;
