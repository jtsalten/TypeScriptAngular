/// <reference path="timesTwo.ts" />

var use = new Utility.useful();

console.log(use.timesTwo(4));

var xy = 123;

use.timesTwo(8);

function sumar(num1:number, num2:number):number {
    return num1+num2;
};

var Sumar2:Function = function(num1,num2){ return num1 + num2 };

var SumaNums:Function = (num1: number, num2: number) => { return num1 + num2 };

alert(SumaNums(1, 2));

class Persona {
    private _name: string;
    _nombre: string;

    constructor(nombre: string) {
        this._name = nombre;
        this._nombre = this._name;
    }

}

var p: Persona = new Persona("Pepe");

var p2 = new Persona("Juan");

alert(p._nombre);

interface Impresora {
    imprimir(): boolean;
}
interface ImpresoraRecibos extends Impresora {
    cortarPapel():boolean;
}

class Computadora implements ImpresoraRecibos {
    private _id: string;
    private _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }
    imprimir(): boolean {
        return true;
    }
    cortarPapel(): boolean {
        return true;
    }
}

class PC extends Computadora {
    private _so: string;

    constructor(nombre: string, so: string) {
        super(nombre);
        this._so = so;
    }
}

var pc = new PC("yoTypeScript", "Windows");

console.log(pc.cortarPapel());