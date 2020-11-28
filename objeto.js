"use strict";
// Clase Persona
function Persona(sNif, sNombre, sApellidos, sDireccion){
    this.nif = sNif;
    this.nombre = sNombre;
    this.apellidos = sApellidos;
    this.direccion = sDireccion;
}


Persona.prototype.toHTMLRow = function (){
    let sFila = "<tr>";
    sFila += "<td>" + this.nif + "</td>";
    sFila += "<td>" + this.nombre + "</td>";
    sFila += "<td>" + this.apellidos + "</td>";
    sFila += "<td>" + this.direccion + "</td>";
    sFila += "</tr>";

    return sFila;
}


// Clase Conductor
function Conductor(dCadCarnet){
    Persona.call(this,sNif,sNombre,sApellidos,sDireccion);
	this.cadCarnet = dCadCarnet;
}

if (Object.create){
    Conductor.prototype = Object.create(Persona.prototype);
    Conductor.prototype.constructor = Conductor;
}
else {
	Conductor.prototype = new Persona();   // Forma antigua
}

Conductor.prototype.toHTMLRow = function (){
    let sFila = "<tr>";
    sFila += "<td>" + this.nif + "</td>";
    sFila += "<td>" + this.nombre + "</td>";
    sFila += "<td>" + this.apellidos + "</td>";
    sFila += "<td>" + this.direccion + "</td>";
    sFila += "<td>" + this.cadCarnet + "</td>";
    sFila += "</tr>";

    return sFila;
}

// Clase GuardiaCivil
function GuardiaCivil(sPuesto){
    Persona.call(this,sNif,sNombre,sApellidos,sDireccion); 
	this.puesto = sPuesto;
}

if (Object.create){
    GuardiaCivil.prototype = Object.create(Persona.prototype);
    GuardiaCivil.prototype.constructor = GuardiaCivil;
}
else {
	GuardiaCivil.prototype = new Persona();   // Forma antigua
} 

GuardiaCivil.prototype.toHTMLRow = function (){
    let sFila = "<tr>";
    sFila += "<td>" + this.nif + "</td>";
    sFila += "<td>" + this.nombre + "</td>";
    sFila += "<td>" + this.apellidos + "</td>";
    sFila += "<td>" + this.direccion + "</td>";
    sFila += "<td>" + this.puesto + "</td>";
    sFila += "</tr>";

    return sFila;
}

// Clase DGT
class Dgt {
    constructor() {
      this.personas = [];
      this.multas = [];
    }
}

// Clase Multa
class Multa{
    constructor(iIdMulta, sNifConductor, sNifGuardia, fImporte, sDescripcion, dFecha){
    this.idMulta = iIdMulta;
    this.nifConductor = sNifConductor;
    this.nifGuardia = sNifGuardia;
    this.importe = fImporte;
    this.pagada = false;
    this.descripcion = sDescripcion;
    this.fecha = dFecha;
    }
    toHTMLRow(){
        let sFila = "<tr>";
    sFila += "<td>" + this.idMulta + "</td>";
    sFila += "<td>" + this.nifConductor + "</td>";
    sFila += "<td>" + this.nifGuardia + "</td>";
    sFila += "<td>" + this.importe + "</td>";
    sFila += "<td>" + this.pagada + "</td>";
    sFila += "<td>" + this.descripcion + "</td>";
    sFila += "<td>" + this.fecha + "</td>";
    sFila += "</tr>";

    return sFila;
    }

    
        
    get idMulta(){
        return this.idMulta;
    }
    
    set idMulta(){
        this.idMulta = iIdMulta;
    }

    get nifConductor(){
        return this.nifConductor;
    }
    
    set nifConductor(){
        this.nifConductor = sNifConductor;
    }

    get nifGuardia(){
        return this.nifGuardia;
    }
    
    set nifGuardia(){
        this.nifGuardia = sNifGuardia;
    }

    get importe(){
        return this.importe;
    }
    
    set importe(){
        this.importe = fimporte;
    }

    get pagada(){
        return this.pagada;
    }
    
    set pagada(){
        this.pagada = true;
    }

    get descripcion(){
        return this.descripcion;
    }
    
    set descripcion(){
        this.descripcion = sDescripcion;
    }

    get fecha(){
        return this.fecha;
    }
    
    set fecha(){
        this.fecha = dFecha;
    }
        
    }

// Clase Grave
class Grave extends Multa{
    constructor(iIdMulta, sNifConductor, sNifGuardia, fImporte, bPagada, sDescripcion, dFecha, iPuntos){
        super(iIdMulta, sNifConductor, sNifGuardia, fImporte, bPagada, sDescripcion, dFecha)
        this.puntos = iPuntos;
    }

    toHTMLRow(){
        let sFila = "<tr>";
    sFila += "<td>" + this.idMulta + "</td>";
    sFila += "<td>" + this.nifConductor + "</td>";
    sFila += "<td>" + this.nifGuardia + "</td>";
    sFila += "<td>" + this.importe + "</td>";
    sFila += "<td>" + this.pagada + "</td>";
    sFila += "<td>" + this.descripcion + "</td>";
    sFila += "<td>" + this.fecha + "</td>";
    sFila += "<td>" + this.puntos + "</td>";
    sFila += "</tr>";

    return sFila;
    }
	
}
// Clase Leve
class Leve extends Multa{
    constructor(iIdMulta, sNifConductor, sNifGuardia, fImporte, bPagada, sDescripcion, dFecha,bBonificada){
        super(iIdMulta, sNifConductor, sNifGuardia, fImporte, bPagada, sDescripcion, dFecha);
        this.bonificada = bBonificada;
    }

    toHTMLRow(){
        let sFila = "<tr>";
    sFila += "<td>" + this.idMulta + "</td>";
    sFila += "<td>" + this.nifConductor + "</td>";
    sFila += "<td>" + this.nifGuardia + "</td>";
    sFila += "<td>" + this.importe + "</td>";
    sFila += "<td>" + this.pagada + "</td>";
    sFila += "<td>" + this.descripcion + "</td>";
    sFila += "<td>" + this.fecha + "</td>";
    sFila += "<td>" + this.bonificada + "</td>";
    sFila += "</tr>";

    return sFila;
    }
    
	
}