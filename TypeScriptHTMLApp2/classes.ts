class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(this.name + " is dancing");
    }
}

var dan = new Person("Dan");
dan.dance();

class AwesomePerson extends Person {
    dance() {
        console.log("SO AWESOME!");
        super.dance();
    }
}

var robb = new AwesomePerson("Robb");
robb.dance();
