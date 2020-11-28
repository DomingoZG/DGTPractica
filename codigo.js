'use strict';


/* MOSTRAR LOS FORMULARIOS */

function altaConductor() {
  formConductor.style.display = "block";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
    // divListadoOrdenado.style.display = "none";

}
function altaGuardiaCivil() {
  formConductor.style.display = "none";
  formGuardia.style.display = "block";
  formMulta.style.display = "none";
    // divListadoOrdenado.style.display = "none";

}
function altaMulta() {
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "block";
    // divListadoOrdenado.style.display = "none";

}
/*
function ocultar() 
{
    let divConjunto = document
      .querySelector("#divTotal")
      .querySelectorAll(".divHijo");
      divConjunto.forEach(value =>
         {
      let x = value;
      x.style.display = "none";
    });
  }
  
  function mostrar(x) 
  {
    ocultar();
    document.querySelector(x).style.display = "block";
  }
  */

