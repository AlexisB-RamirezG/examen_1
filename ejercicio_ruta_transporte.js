class Camion {
    constructor(numeroCamion, chofer) {
        this._numeroCamion = numeroCamion;
        this._chofer = chofer;
    }

    get numeroCamion() {
        return this._numeroCamion;
    }

    get chofer() {
        return this._chofer;
    }

    set chofer(chofer) {
        this._chofer = chofer;
    }
}

class Base {
    cosntructor(nombreBase, referencia, latitud, longitud) {
        this._nombre = nombreBase;
        this._referencia = referencia;
        this._latitud = latitud;
        this._longitud = longitud;
    }

    get nombre() {
        return this._nombre;
    }

    get referencia() {
        return this._referencia;
    }

    get latitud() {
        return this._latitud;
    }

    get longitud() {
        return this._longitud;
    }

    set referencia(referencia) {
        this._referencia = referencia;
    }
} 

class Ruta {
    constructor(nombreRuta, tiempoDuracion) {
        this._nombre = nombreRuta;
        this._duracion = tiempoDuracion; 
        this._bases = new Array(5); //Este array estará conformado por objetos de la clase Base y el tiempo a la base anterior
        this._salidas = new Array(10) //Este array estará conformado por objetos clase Salida
    }

    get nombre() {
        return this._nombre;
    }

    get duracion() {
        return this._duracion;
    }

    get bases() {
        return this._bases;
    }

    getHoraInicio() {

    }

    getHoraFin() {

    }
}

class Salida {
    constructor(camion, base, ruta) {
        this._numeroCamionSalida = camion.numeroCamion;
        this._nombreBaseInicio = base.nombre;
    }

    get numeroCamionSalida() {
        return this._numeroCamion;
    }

    get nombreBaseInicio() {
        return this._nombreBaseInicio;
    }
}