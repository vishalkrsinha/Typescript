//let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //won't work
//Block scope
function reset() {
    //console.log(variable); //undefined: as outside variables won't be accessible inside the function unless, it's passed as an argument.
    var variable = null;
    console.log(variable); //null
}
reset();
console.log(variable);
"Another value";
//Arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 5));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 5));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
//Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
//Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 79, 10, -3));
console.log(Math.max.apply(Math, numbers));
//REST
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
//Destructuring Arrays
console.log("DESTRUCTURING");
var myHobbies = ["Sports", "Movies"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring Objects
var userData = { userName: "Name", age: 27 };
var myName = userData.userName, myAge = userData.age; //Using aliases
console.log(myName, myAge);
//Template Literals
var userName = "Max";
var greeting = "This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
//Module Exercise: Problem
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    if (value === void 0) { value = 10; }
    return value * 2;
};
console.log(double());
// Exercise 2 - If only we could provide some default values...
var greety = function (name) {
    if (name === void 0) { name = "Name"; }
    console.log("Hello, " + name);
};
greety();
greety("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
//# sourceMappingURL=app.js.map