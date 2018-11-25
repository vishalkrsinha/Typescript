class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Name", "userNname");
console.log(person.name, person.username);
person.printAge();
person.setType("Cool guy");


//Inheritance
class Man extends Person {
    //name = "Manav";
    constructor(username: string) {
        super("Manav", username);
        this.age = 31;
        //console.log(this.setType);
    }
}
const man = new Man("Anna");
console.log(man);


//Getters & Setters
class Plant {
    private _species: string = "Default";

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }

    get species() {
        return this._species;
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant);
plant.species = "Green Plant";
console.log(plant.species);


//Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));


//Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() { return this.budget * 2; }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);


//private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Something else";
console.log(right.name);


//Module Exercise: Problem
// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number=0;

    constructor(name: string) { this.name = name; }
    
    honk = function () {
        console.log("Toooooooooot!");
    };

    accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject  {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;

console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class PersonExercise {
    private _firstName: string = "";

    set firstName (value: string) {
    if (value.length > 3) {
        this._firstName = value;
    }
    else {
        this._firstName = "";
    }
    }

    get firstName() {
        return this._firstName;
    }
}

const personExercise = new PersonExercise();
console.log(personExercise.firstName);
personExercise.firstName = "Ma";
console.log(personExercise.firstName);
personExercise.firstName = "FirstName";
console.log(personExercise.firstName);