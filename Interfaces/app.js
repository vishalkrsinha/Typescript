function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Name",
    age: 27,
    hobbies: ["Sports", "Movies"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person);
changeName(person);
greet(person);
//greet({ firstName: "Anna", age: 27 });
person.greet("Anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "FirstName";
greet(myPerson);
myPerson.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map