// Declaración Clase CARRETE
function Carrete(simbolos) {

    this.simbolos = simbolos;
    this.indice = Math.floor(Math.random() * this.simbolos.length);

    this.getImagen = function() {
        return this.simbolos[this.indice];
    };

    this.girar = function() {
        this.indice = Math.floor(Math.random() * this.simbolos.length);
    };

    this.getNombre = function() {
        let partes = this.simbolos[this.indice].split("/");
        return partes[partes.length - 1];
    }
}