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

    this.getNombre = function () {
        var partes = this.simbolos[this.indice].split("/");
        var nombreConExt = partes[partes.length - 1] || "";
        var nombre = nombreConExt.replace(/\.[^.]+$/, "").toLowerCase().trim();
    return nombre;
};
}