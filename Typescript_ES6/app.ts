//let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //won't work


//Block scope
function reset() {
    //console.log(variable); //undefined: as outside variables won't be accessible inside the function unless, it's passed as an argument.
    let variable = null;
    console.log(variable); //null
}
reset();
console.log(variable); "Another value";


//Arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 5));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 5));

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");


//Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {        
        start--;
    }
    console.log("Done!", start);
};
countdown(20);


//Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 79, 10, -3));
console.log(Math.max(...numbers));


//REST
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2,6));


//Destructuring Arrays
console.log("DESTRUCTURING");
const myHobbies = ["Sports", "Movies"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//Destructuring Objects
const userData = { userName: "Name", age: 27 };
const {userName: myName, age:myAge} = userData; //Using aliases
console.log(myName, myAge);


//Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);



//Module Exercise: Problem
// Exercise 1 - Maybe use an Arrow Function?
var double = (value: number = 10)=> value * 2;
console.log(double());

// Exercise 2 - If only we could provide some default values...
var greety = (name: string = "Name")=> {
    console.log("Hello, " + name);
};
greety();
greety("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1,result2,result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var {firstName, experience} = scientist;
console.log(firstName, experience);