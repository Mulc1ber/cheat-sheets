# ЗАДАЧИ на подготовку к собеседованию!

Описание

#### Из диапазона чисел [100: 2609] найти те, что удовлетворяют условиям:

1. Делится на 3 и 7
2. Не делится на 2 и 5

```javascript
const findNumbers = () => {
  result = [];
  for (i = 1016; i <= 1937; i++) {
    if (i % 3 === 0 && i % 7 === 0 && i % 5 !== 0 && i % 2 !== 0) {
      result.push(i);
    }
  }
  console.log(result);
};
findNumbers();
```

#### Состоят ли строки, передаваемые в функцию в виде аргумента, из одинаковых букв

```javascript
const isEqualSymbols = (str1, str2) => {
  const arr1 = str1.split("").sort().join("");
  const arr2 = str2.split("").sort().join("");

  return arr1 === arr2;
};
console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false
```

#### Найти уникальные значение в массиве

```javascript
const unique = (array) => {
  // Вариант с методами массива
  return array.filter((value, index, self) => self.indexOf(value) === index);
  // Вариант с объектом Set()
  return [...new Set(array)];
};
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]
```

#### Является ли строка палиндромом

```javascript
const isPalindrome = (text) => {
  const reversText = text.split("").reverse().join("");
  return text === reversText;
};
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("programmer")); // false
```
