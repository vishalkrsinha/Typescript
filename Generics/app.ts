// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Vishal".length));
console.log(echo(27));
console.log(echo({ name: "Vishal", age: 27 }));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(echo("Vishal").length);
console.log(echo(27));
console.log(echo({ name: "Vishal", age: 27 }));


// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

//Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);


// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));


//Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());


// Module Exercise: 
class MyMap<T>{
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}
//setItem(key: string, item: T) // should create a new key-value pair

//getItem(key: string) // should retrieve the value of the provided key
//clear() // should remove all key-value pairs
//printMap() // should output key-value pairs

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();

