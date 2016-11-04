var n: number = 1;
n = 123;
var isWinter: Boolean = false;
isWinter = true;

var names: any[] = ["Jon", "Rickon", "Arya", 5];

enum Starks { Jon, Bran, Eddard, Catlyn };

var cat: Starks = Starks.Catlyn;

function getName(): string {
    return "Bran";
}

function nothing(): void {
    console.log("Wintes is coming!");
}

interface Starky {
    name: string;
    age?: number;
}

function printName(stark: Starky) {
    console.log(stark.name);
}

printName({ name: "Eddard" });
printName({ name: "joe" });

class Stark {
    name: string;
    static castle: string = "Winterfell";
    saying: string;

    constructor() {
        this.saying = "Winterfell";
    }

    hello(person:string) {
        console.log("Hello " + person);
    }
}

var ned = new Stark();
ned.name = "Ned Stark";
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.hello("Robert");

