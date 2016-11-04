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
//# sourceMappingURL=types.js.map