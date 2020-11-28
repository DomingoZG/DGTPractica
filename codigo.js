'use strict';

let dgt = new Dgt();
/* MOSTRAR LOS FORMULARIOS */

function altaConductor() {
  formConductor.style.display = "block";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
    

}
function altaGuardiaCivil() {
  formConductor.style.display = "none";
  formGuardia.style.display = "block";
  formMulta.style.display = "none";
    

}
function altaMulta() {
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "block";
    

}

function añadeConductor(){
  let nif = document.getElementById("txtNif");
  let nombre = document.getElementById("txtNombre");
  let apellido = document.getElementById("txtApellido");
  let direccion = document.getElementById("txtDireccion");
  let cadCarnet = document.getElementById("txtCaducidad");

  let conductor = new Conductor(nif, nombre, apellido, direccion,cadCarnet);

  dgt.comprobarConductor(conductor);
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

