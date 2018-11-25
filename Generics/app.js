// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Vishal".length));
console.log(echo(27));
console.log(echo({ name: "Vishal", age: 27 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(echo("Vishal").length);
console.log(echo(27));
console.log(echo({ name: "Vishal", age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
//Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// Module Exercise: 
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
//setItem(key: string, item: T) // should create a new key-value pair
//getItem(key: string) // should retrieve the value of the provided key
//clear() // should remove all key-value pairs
//printMap() // should output key-value pairs
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
//# sourceMappingURL=app.js.map