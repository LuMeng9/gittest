export = {};

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string, theLegNum: number) {
    this.name = theName;
    this.numberOfLegs = theLegNum;
  }
}

let dad = new Octopus("Man with the 5 strong legs", 5);
console.log(dad.name);
console.log(dad.numberOfLegs);

interface Named {
  //   x: number;
  name: number;
}

// let alice = 3;
let x: Named;
let y = { name: 3, location: 2 };
x = y;
console.log(y.name);
console.log(y.location);
console.log(x);

let arrowFunX = () => ({ name: "alice" });
let arrowFunY = () => ({ name: "Meng", location: "Shang Hai" });

arrowFunX = arrowFunY;

console.log(arrowFunX().name);
console.log(arrowFunY().name + " " + arrowFunY().location);

// arrowFunY = arrowFunX;

// console.log(arrowFunY().name + " " + arrowFunY().location);

class Animal {
  feet: number = 10;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number = 20;
  constructor(numFeet: number) {}
}

let a: Animal;
let b: Size;

console.log(a.feet);
console.log(b.feet);

a = b;
b = a;

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name) {
    console.log(`Hello, I'm ${name}.`);
  }
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

let str = padLeft("Hello world", 4); // returns "    Hello world"
console.log(str);
console.log(Array(4).length);
console.log(Array(4 + 1).length);

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

var people: LinkedList<Person>;
var s = people.name;
console.log(s);
var s = people.next.name;
console.log(s);
var s = people.next.next.name;
console.log(s);
var s = people.next.next.next.name;
console.log(s);

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue();
console.log(v);

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
let pets = ["Cat", "Dog", "Python"];

console.log(pets);
for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
