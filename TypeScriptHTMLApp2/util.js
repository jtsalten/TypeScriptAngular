/// <reference path="timesTwo.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var use = new Utility.useful();
console.log(use.timesTwo(4));
var xy = 123;
use.timesTwo(8);
function sumar(num1, num2) {
    return num1 + num2;
}
;
var Sumar2 = function (num1, num2) { return num1 + num2; };
var SumaNums = function (num1, num2) { return num1 + num2; };
alert(SumaNums(1, 2));
var Persona = (function () {
    function Persona(nombre) {
        this._name = nombre;
        this._nombre = this._name;
    }
    return Persona;
}());
var p = new Persona("Pepe");
var p2 = new Persona("Juan");
alert(p._nombre);
var Computadora = (function () {
    function Computadora(nombre) {
        this._nombre = nombre;
    }
    Computadora.prototype.imprimir = function () {
        return true;
    };
    Computadora.prototype.cortarPapel = function () {
        return true;
    };
    return Computadora;
}());
var PC = (function (_super) {
    __extends(PC, _super);
    function PC(nombre, so) {
        _super.call(this, nombre);
        this._so = so;
    }
    return PC;
}(Computadora));
var pc = new PC("yoTypeScript", "Windows");
console.log(pc.cortarPapel());
//# sourceMappingURL=util.js.map