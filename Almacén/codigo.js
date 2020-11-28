"use strict";
// Variables globales
var iCodigos = [];
var sNombres = [];
var fPrecios = [];
var iUnidades = [];
var divListado = document.getElementById("listado");
var divListadoOrdenado = document.getElementById("listado");

function altaRemesa() {
    frmAltaRemesa.style.display = "block";
    frmSalidaRemesa.style.display = "none";
    divListado.style.display = "none";
    divListadoOrdenado.style.display = "none";

}

function salidaRemesa() {
    frmAltaRemesa.style.display = "none";
    frmSalidaRemesa.style.display = "block";
    divListado.style.display = "none";
    divListadoOrdenado.style.display = "none";

}

function aceptarAltaRemesa() {

    let iCodigo, sNombre, fPrecio, iUnidades;

    iCodigo = parseInt(frmAltaRemesa.txtCodigo.value.trim());
    sNombre = frmAltaRemesa.txtNombreProducto.value.trim();
    fPrecio = parseFloat(frmAltaRemesa.txtPrecio.value.trim());
    iUnidades = parseInt(frmAltaRemesa.txtUnidades.value.trim());

    let iPos = iCodigos.indexOf(iCodigo);

    if (iPos == -1) { // EL codigo no existe
        iCodigos.push(iCodigo);
        sNombres.push(sNombre);
        fPrecios.push(fPrecio);
        window.iUnidades.push(iUnidades);
    } else { // El codigo ya existia
        sNombres[iPos] = sNombre;
        fPrecios[iPos] = fPrecio;
        window.iUnidades[iPos] += iUnidades;
    }

    alert("Alta de remesa OK");
    frmAltaRemesa.style.display = "none";

}

function listadoBasico() {
    let i = 0;
    let sListado = '<table border="1"><thead><tr>';

    sListado += "<th>Codigo</th><th>Nombre</th><th>Precio</th><th>Unidades</th>";
    sListado += "</tr></thead><tbody>";

    for (i = 0; i < iCodigos.length; i++) {
        sListado += "<tr>";
        sListado += "<td>" + iCodigos[i] + "</td>";
        sListado += "<td>" + sNombres[i] + "</td>";
        sListado += "<td>" + fPrecios[i] + "</td>";
        sListado += "<td>" + iUnidades[i] + "</td>";
        sListado += "</tr>";
    }

    sListado += "</tbody></table>";

    // Ocultar formularios
    frmAltaRemesa.style.display = "none";
    frmSalidaRemesa.style.display = "none";
    // Mostrar la capa de listado
    divListado.style.display = "block";

    //Insertar el listado
    divListado.innerHTML = sListado;
}
    

    function listadoOrdenado(){
        let i = 0;
        let sListadoOrdenado = '<table border="1"><thead><tr>';
    
        sListadoOrdenado += "<th>Codigo</th><th>Nombre</th><th>Precio</th><th>Unidades</th>";
        sListadoOrdenado += "</tr></thead><tbody>";
    
        for (i = 0; i < iCodigos.length; i++) {
            sListadoOrdenado += "<tr>";
            sListadoOrdenado += "<td>" + iCodigos[i] + "</td>";
            sListadoOrdenado += "<td>" + sNombres[i] + "</td>";
            sListadoOrdenado += "<td>" + fPrecios[i] + "</td>";
            sListadoOrdenado += "<td>" + iUnidades[i] + "</td>";
            sListadoOrdenado += "</tr>";
            sListadoOrdenadoCodigo=sListadoOrdenado.sort();
        }
    
        sListadoOrdenado += "</tbody></table>";

    

    // Ocultar formularios
    frmAltaRemesa.style.display = "none";
    frmSalidaRemesa.style.display = "none";
    divListado.style.display = "none";
    // Mostrar la capa de listado ordenado;
    divListadoOrdenado.style.display = "block";
    //Insertar el listado
    divListadoOrdenado.innerHTML = sListadoOrdenadoCodigo;
    

}