//string 
let myName = 'Vishal';
//myName = 28;


//number
let myAge = 27;
//myAge = 'Max';

//boolean
let hasHobbies = false;
//hasHobbies = 1;

//assign types
let myRealAge: number;
//myRealAge = '27';
myRealAge = 27;

//array
let hobbies: any[] = ["Cooking", "Sports"]
//console.log(typeof hobbies);
//hobbies = ["A String"];
hobbies = [100];

//tuples
let address: [string, number] = ["Superstreet", 99];

//enum
enum Color {
    Gray, //0
    Green = 100,//100
    Blue//2
}

let myColor: Color = Color.Blue;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

//functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello!");
}

//argument types
function multiply(value1, value2): number {
    return value1 * value2;
}
//console.log(multiply(2, 'Vishal'));
console.log(multiply(2, 5));


//function types
let myMultiply: (a: number, b: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
//myMultiply();


//objects
let userData: { name: string, age: number } = {
    name: "Name",
    age:27
};
//userData = {};


//complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
//complex = {};

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true;

//check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}


//never
function neverReturns(): never {
    throw new Error('An error!');
}


//Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

type BankAccount = { money: number, deposit: (val: number) => void };

//Module Exercise: Problem
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number):void {
        this.money += value;
    }
}

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Vishal",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Movies"]
};

myself.bankAccount.deposit(3000);

console.log(myself);