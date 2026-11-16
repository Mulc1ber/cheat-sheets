# Базовые типы

Описание

```ts
// Работа с числами
function sum(a: number, b: number): number {
  return a + b;
}

const n1: number = 40;
const n2: number = 2;

let a = 12;
let b = Infinity;
let c = NaN;
let d = 0x1;
let e = 0.1;
let f: 24 = 24;

console.log(sum(n1, n2));

// Работа со строками
const string = "Hello TypeScript";

function transform(str: string, uppercase: boolean): string {
  if (uppercase) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
}

let isUppercase = true;

console.log(transform(string, isUppercase));
console.log(transform(string, false));

const arrowTransform = (str: string, uppercase: boolean): string => {
  if (uppercase) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
};

// Работа с объектами
const person: {
  name: string;
  age: number;
  surname: string;
  address: { city: string; street: string };
} = {
  name: "John",
  age: 30,
  surname: "Doe",
  address: {
    city: "New York",
    street: "5th Avenue",
  },
};

function fullname(obj: { name: string; surname: string }): string {
  return obj.name + " " + obj.surname;
}
console.log(fullname(person));

// Работа с массивами
const names: string[] = ["John", "Alice", "Bob"];

names.push("Eve");
console.log(names);

for (let name of names) {
  console.log(name.toUpperCase());
}

const result = names
  .filter((n) => n !== "Bob")
  .map((n) => n.length)
  .reduce((acc, cur) => (acc += cur), 0);

console.log(result);

// Работа с Кортежами (Tuple)
// const [count, setCount] = React.useState(100); // Это и есть кортеж
const tuple: readonly [number, string] = [100, "Hello"];

// tuple[0] = 'Hello'; // Error
// const tmp = tuple[2] // Error
// tuple.push('false'); // Error из-за readonly

const tuple2: [boolean, string, ...number[]] = [true, "Hello", 1, 2, 3, 4, 5];

// Работа с перечислениями (Enums)
const ROLE = {
  ADMIN: "admin",
  USER: "user",
};

enum Role {
  admin,
  user,
}

const person1 = {
  role: Role.admin,
};

const person2 = {
  role: Role.user,
};

function check(person: { role: Role }) {
  if (person.role === Role.admin) {
    console.log("User is Admin");
  } else {
    console.log("User is User");
  }
}

const temp = {
  role: "star wars",
};

check(person1);
check(person2);
// check(temp); // error

// Работа с Symbol и BigInt
let aa: symbol = Symbol("key");
let bb: symbol = Symbol("key2");

console.log(aa === bb);

const big1: bigint = 123n;
const big2: bigint = BigInt(456);

// Работа с void и undefined

// void используется для функций, которые ничего не возвращают
function log(message: string): void {
  console.log(message);
}

// undefined используется для переменных, которые не инициализированы
let tmp: undefined;

// Работа с функциями
function logg(data: any): void {
  console.log(data);
}

function summ(a: number, b: number, callback: (d: any) => void): number {
  const result = a + b;
  callback(result);
  return result;
}

// let func: Function
let func: (n1: number, n2: number, cb: (d: any) => void) => number;

func = summ;
// func = logg // error

func(1, 2, logg);
```
