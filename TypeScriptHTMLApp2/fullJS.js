var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function hello(text) {
    console.log("Hola " + text);
}
hello("John");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var dan = new Person("Dan");
dan.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        _super.apply(this, arguments);
    }
    AwesomePerson.prototype.dance = function () {
        console.log("SO AWESOME!");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var robb = new AwesomePerson("Robb");
robb.dance();
var Utility;
(function (Utility) {
    var useful = (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
var n = 1;
n = 123;
var isWinter = false;
isWinter = true;
var names = ["Jon", "Rickon", "Arya", 5];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return "Bran";
}
function nothing() {
    console.log("Wintes is coming!");
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
printName({ name: "joe" });
var Stark = (function () {
    function Stark() {
        this.saying = "Winterfell";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.name = "Ned Stark";
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.hello("Robert");
/// <reference path="timesTwo.ts" />
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
//# sourceMappingURL=fullJS.js.map