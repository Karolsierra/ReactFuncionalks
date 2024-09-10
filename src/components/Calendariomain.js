import React from "react";

function Calendariomain () {
    return (
         
      <main>
      <div className="form-container">
        <h2 className="Titulo-Usua" >Seleccione Ficha y Coordinación</h2>
        <form id="selection-form">
          <label className="label-ficha-usua" htmlFor="ficha">Ficha:</label>
          <input className="input-calenda-usua" type="text" id="ficha" name="ficha" required />
          <label className="label-ficha-usua" htmlFor="coordinacion">Coordinación:</label>
          <input className="input-calenda-usua" type="text" id="coordinacion" name="coordinacion" required />
          <button className="boton-calendario" type="submit">Mostrar Calendario</button>
        </form>
      </div>
      <div
        className=" calendar-container"
        id="calendar-container"
        style={{ display: "none" }}
      >
      </div>
    </main>
    );
};

export default Calendariomain;