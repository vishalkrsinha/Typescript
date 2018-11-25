//string 
var myName = 'Vishal';
//myName = 28;
//number
var myAge = 27;
//myAge = 'Max';
//boolean
var hasHobbies = false;
//hasHobbies = 1;
//assign types
var myRealAge;
//myRealAge = '27';
myRealAge = 27;
//array
var hobbies = ["Cooking", "Sports"];
//console.log(typeof hobbies);
//hobbies = ["A String"];
hobbies = [100];
//tuples
var address = ["Superstreet", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, 'Vishal'));
console.log(multiply(2, 5));
//function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
//myMultiply();
//objects
var userData = {
    name: "Name",
    age: 27
};
//userData = {};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = true;
//check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never
function neverReturns() {
    throw new Error('An error!');
}
//Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
//Module Exercise: Problem
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Vishal",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Movies"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=app.js.map