'use strict';

var dgt = new Dgt();
/* MOSTRAR LOS FORMULARIOS */

function altaConductor() {
  formConductor.style.display = "block";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
  formPagarMulta.style.display = "none";
  
  
}
function altaGuardiaCivil() {
  formConductor.style.display = "none";
  formGuardia.style.display = "block";
  formMulta.style.display = "none";
  formPagarMulta.style.display = "none";
  
}
function altaMulta() {
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "block";
  formPagarMulta.style.display = "none";
}
function altaPagarMulta(){
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
  formPagarMulta.style.display = "block";
}

function añadeConductor(){
  
  let nif = document.getElementById("txtNif").value;
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let direccion = document.getElementById("txtDireccionConductor").value;
  let cadCarnet = document.getElementById("txtCaducidad").value;
 
  let conductor = new Conductor(nif, nombre, apellido, direccion, cadCarnet);
 
  //Compruebo Conductor en DGT
  dgt.comprobarConductor(conductor);

  if(dgt.comprobarConductor(conductor)){
    alert("Ya existe");
  }else{
    dgt.sumaConductor(conductor);
    alert("Creado");
  }
  //Limpio el formulario
  formConductor.reset();
}

function añadeGuardia(){
  
  let nif = document.getElementById("txtNifGuardia").value;
  let nombre = document.getElementById("txtNombreGuardia").value;
  let apellido = document.getElementById("txtApellidoGuardia").value;
  let puesto = document.getElementById("txtPuesto").value;
  let direccion = document.getElementById("txtDireccion").value;
 
  let guardia = new GuardiaCivil(nif, nombre, apellido, puesto, direccion);
 
 
  dgt.comprobarGuardia(guardia);

  if(dgt.comprobarGuardia(guardia)){
    alert("Ya existe");
  }else{
    dgt.sumaGuardia(guardia);
    alert("Creado");
  }
  
  formGuardia.reset();
}




//////////////////////// LISTADOS //////////////////////////////////
function mostrarTablaConductor(){

  let sListado = dgt.listadoConductor();
  let oVentana = open();
  oVentana.document.write('<html><head><title>Listado Básico!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
  oVentana.document.body.innerHTML=sListado;
  oVentana.document.write('</body></html>');
  }

  function mostrarTablaGuardia(){

    let sListado = dgt.listadoGuardia();
    let oVentana = open();
    oVentana.document.write('<html><head><title>Listado Básico!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
    oVentana.document.body.innerHTML=sListado;
    oVentana.document.write('</body></html>');
    }
  


