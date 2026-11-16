# Работа с типами

Описание

```ts
/**
 * 1. Объединение (Union Type)
 */
function compute(p1: number | string, p2: number | string) {
  if (typeof p1 === "number" && typeof p2 === "number") {
    return p1 + p2;
  }
  return p1.toString() + " " + p2.toString();
}

console.log(compute(1, 2));
console.log(compute("hello", "world"));

function logError(error: string | string[]): string | void {
  if (Array.isArray(error)) {
    return error.reduce((prev, next) => (prev += " " + next), "");
  } else {
    console.log(error);
  }
}

/**
 * 2. Литералы (Literal Type)
 */
type OutputType = "text" | "json" | "xml";

// const str = 'typescript'; // Литеральный тип

function convert(data: object, type: OutputType) {
  if (type === "text") {
    return JSON.stringify(data);
  } else if (type === "json") {
    return { ...data };
  }
}

console.log(convert({ a: 1 }, "text"));

/**
 * 3. Интерфейсы (Interface)
 */
// Так можно, но на этот случай есть interface
// type User = {
//     name: string;
//     age: number;
//     hobbies: string[]
// }

interface User {
  name: string;
  age: number;
  hobbies?: string[]; // опциальный оператор, который делает поле необязательным
}

interface Address {
  city: string;
  street: string;
}

interface FullUser extends User, Address {
  date: Date;
}

const person: FullUser = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  city: "New York",
  street: "123 Main St",
  date: new Date(),
};

interface UserMap {
  [key: number]: FullUser;
  date?: Date;
}

const userMapOne: UserMap = {
  date: new Date(),
  1: person,
  2: person,
  3: person,
};

const userMapTwo = {
  date: new Date(),
  1: person,
  2: person,
  3: person,
} as UserMap;

/**
 * 4. unknown
 * unknown - это тип, который может быть любого типа данных во время выполнения программы.
 * unknown - означает, что мы пока тчо не знаем какого типа будет переменная, но позднее мы узнаем его.
 * unknown - подразновидность типа any, но более строгий.
 */
let a: unknown = 42;

let b = a === 10; // == === || && ? !

// let c = a + 10 // error

if (typeof a === "number") {
  let c = a + 10;
}

/**
 * 5. never
 * never - это тип данных, которым нельзя присвоить значение.
 */
function throwError(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

/**
 * 6. Защитник типа (Type Guard)
 */
function isBoolean(val: string | boolean): val is boolean {
  return typeof val === "boolean";
}

function isString(val: string | boolean): val is string {
  return typeof val === "string";
}

// С защитником
function logFlag(flag: string | boolean) {
  if (isBoolean(flag)) {
    console.log("this is boolean");
  } else if (isString(flag)) {
    console.log("this is string");
  }
}

// Без защитника
// function logFlag(flag: string | boolean) {
//     if(typeof flag === 'boolean') {
//         console.log('this is boolean');
//     } else if(typeof flag === 'string') {
//         console.log('this is string');
//     }
// }

logFlag(true);
logFlag("hello");
```
