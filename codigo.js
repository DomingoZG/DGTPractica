'use strict';

var dgt = new Dgt();


datosIniciales();


function datosIniciales() {
    dgt.sumaConductor(new Conductor("4447", "Alvaro", "Zujar", " Calle Mendez", "2022-10-13"));
    dgt.sumaConductor(new Conductor("5555", "Alejandro", "Rojas", "Calle Pelado", "2023-4-10"));
    dgt.sumaConductor(new Conductor("4444", "Juan", "Medina", "Calle Poleo", "2021-7-15"));
    dgt.sumaConductor(new Conductor("7777", "Pedro", "Lopez", "Calle Menta", "2020-2-10"));
 
    dgt.sumaGuardia(new GuardiaCivil("6666", "Ezequiel", "Gomez", "Capitan", "Avenida Andalucia"));
    dgt.sumaGuardia(new GuardiaCivil("8888", "Domingo", "Pardo", "Cabo", "Calle Arroz"));


    dgt.sumaMulta(new Leve(200, "4447", "6666", 50, "Zona Prohibida", "2020-01-13",true));
    dgt.sumaMulta(new Leve(400, "5555", "8888", 500, "Borrachera", "2020-9-15",false));

    dgt.sumaMulta(new Grave(2222,"4447","6666",50,"Zona Prohibida","2020-10-15",12));
    dgt.sumaMulta(new Grave(3333,"5555","8888",70,"Aparcamiento","2020-10-10",15));


}
/* MOSTRAR LOS FORMULARIOS */

function altaConductor() {
  formConductor.style.display = "block";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
  formPagarMulta.style.display="none";
  
  
}
function altaGuardiaCivil() {
  formConductor.style.display = "none";
  formGuardia.style.display = "block";
  formMulta.style.display = "none";
  formPagarMulta.style.display="none";
  
  
}
function altaMulta() {
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "block";
  formPagarMulta.style.display="none";
  
  
}

function altaPagarMulta(){
  formConductor.style.display = "none";
  formGuardia.style.display = "none";
  formMulta.style.display = "none";
  formPagarMulta.style.display="block";

}

function seleccionado(){
if(formMulta.radioMulta_1.checked){
  document.getElementById("bonificacion").style.display = "none";
  document.getElementById("puntos").style = "flex";
}else{
  document.getElementById("puntos").style.display = "none";
  document.getElementById("bonificacion").style.display = "flex";
}
}

function añadeMulta(){
  let id = document.getElementById("txtIdMulta").value;
  let nifConductor = document.getElementById("txtNifConductor").value;
  let nifGuardia = document.getElementById("txtNifGuardiaM").value;
  let importe = document.getElementById("txtImporte").value;
  let descripcion = document.getElementById("txtDescripcion").value;
  let fecha = document.getElementById("txtFecha").value;


  
  if(formMulta.radioMulta_1.checked){
    let puntos = document.getElementById("txtPunto").value;
    let multa = new Grave(id, nifConductor, nifGuardia, importe, descripcion, fecha, puntos);
      if(dgt.comprobarMulta(multa)){
        alert("La multa ya existe");
      }else{
      dgt.sumaMulta(multa);
      alert("Multa creada");
      }
      
  }else{
      var multa = new Leve(id, nifConductor, nifGuardia, importe, descripcion, fecha, formMulta.radio_0.checked);

    if(dgt.comprobarMulta(multa)){
      alert("La multa ya existe");
    }else{
      dgt.sumaMulta(multa);
      alert("Multa creada");
    }
  }
    
  
  formMulta.reset();
}

function añadeConductor(){
  
  let nif = document.getElementById("txtNif").value;
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let direccion = document.getElementById("txtDireccionConductor").value;
  let cadCarnet = document.getElementById("txtCaducidad").value;
 
  let conductor = new Conductor(nif, nombre, apellido, direccion, cadCarnet);
 
  //Compruebo Conductor en DGT
  
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
  
  
  
  if(dgt.comprobarGuardia(guardia)){
    alert("Ya existe");
  }else{
    dgt.sumaGuardia(guardia);
    alert("Creado");
  }
  
  formGuardia.reset();
}

function pagarMulta(){
  let id = formPagarMulta.idMulta.value.trim();

  let multa = new Multa(id, null, null,null,null,null,null);
  if(!dgt.comprobarMulta(multa)){
    alert("No existe multa!")
    document.getElementById("pagar").style.display = "none";
  }else{
    if(dgt.pagarMulta(id)){
      document.getElementById("pagar").style.display = "block";
      formPagarMulta.reset();
    }else{
      alert("Esa multa ya ha sido Pagada");
      document.getElementById("pagar").style.display = "none";
    }
  }
}

function mostrarTablaConductor(){

  let sListado = dgt.listadoConductor();
  let oVentana = open();
  oVentana.document.write('<html><head><title>Listado Básico Conductor!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
  oVentana.document.body.innerHTML=sListado;
  oVentana.document.write('</body></html>');
  }

  function mostrarTablaGuardia(){

    let sListado = dgt.listadoGuardia();
    let oVentana = open();
    oVentana.document.write('<html><head><title>Listado Básico Guardia!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
    oVentana.document.body.innerHTML=sListado;
    oVentana.document.write('</body></html>');
    }

    function mostrarTablaSaldo()
    {
      let sListado = dgt.listadoConductorSaldo();
      let oVentana = open();
      oVentana.document.write('<html><head><title>Listado Saldo!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
      oVentana.document.body.innerHTML=sListado;
      oVentana.document.write('</body></html>');


    }

    function mostrarTablaPuntos()
    {
      let sListado = dgt.listadoPuntosConductor();
      let oVentana = open();
      oVentana.document.write('<html><head><title>Listado Puntos!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
      oVentana.document.body.innerHTML=sListado;
      oVentana.document.write('</body></html>');

    }

    function mostrarTablaMultasGuardia()
    {
      let sListado = dgt.listadoMultasGuardia();
      let oVentana = open();
      oVentana.document.write('<html><head><title>Listado Multas Guardia!</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></head><body>');
      oVentana.document.body.innerHTML=sListado;
      oVentana.document.write('</body></html>');

    }
  

    function generarPDF(){

      var doc = new jsPDF({
        orientation: 'landscape'
    });
    
    let oVentana = window.open("plantilla.html", "Multa");
    oVentana.write(listadoMulta());
    
    // Save the PDF
    doc.save('Multa.pdf');


      
    }
  

