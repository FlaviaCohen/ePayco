import React from "react";
import iconClose from "../imgs/icon-close.svg";
import iconOk from "../imgs/icon-ok.svg";
import iconError from "../imgs/icon-error.svg";

const FormModal = ({ success, setModal }) => {
  return (
    <div className="modal-container">
      <img
        className="icon-close"
        src={iconClose}
        onClick={() => setModal(false)}
      />
      <img className="icon-status" src={success ? iconOk : iconError} />
      <p className="comment">
        {success
          ? "formulario enviado con éxito"
          : "formulario contiene errores"}
      </p>
      <button onClick={()=> setModal(false)}>
        <p>{success ? "Finalizar" : "Regresar"}</p>
      </button>
    </div>
  );
};

export default FormModal;
