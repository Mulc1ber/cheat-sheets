# Методы массива

Описание

## Список методов массива:

### Добавление/удаление элементов:

> _(Эти методы являются основными инструментами для управления данными в массивах в JavaScript и часто используются в повседневной разработке.)_

1. `push()`: Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.

2. `pop()`: Удаляет последний элемент из массива и возвращает его.

3. `shift()`: Удаляет первый элемент из массива и возвращает его.

4. `unshift()`: Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.

5. `splice()`: Добавляет и/или удаляет элементы из массива.

6. `slice()`: Возвращает новый массив, содержащий копию части исходного массива.

### Поиск элементов:

> _(Эти методы предоставляют различные способы поиска элементов в массивах и часто используются для проверки наличия элементов, получения их индексов или выбора элементов, удовлетворяющих определенным критериям.)_

7. `indexOf()`: Возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если такого индекса нет.

8. `lastIndexOf()`: Возвращает последний индекс, по которому данный элемент может быть найден в массиве, или -1, если такого индекса нет.

9. `find()`: Возвращает значение первого найденного элемента в массиве, которое удовлетворяет предоставленной тестирующей функции, или undefined, если ничего не найдено.

10. `findIndex()`: Возвращает индекс первого найденного элемента в массиве, который удовлетворяет предоставленной тестирующей функции, или -1, если ничего не найдено.

11. `includes()`: Определяет, содержит ли массив определенный элемент, возвращая true или false соответственно.

### Итерация по элементам:

> _(Эти методы предоставляют мощные инструменты для работы с массивами и часто используются для итерации, преобразования и оценки элементов массива.)_

12. `forEach()`: Выполняет указанную функцию один раз для каждого элемента в массиве.

13. `map()`: Создает новый массив с результатами вызова указанной функции для каждого элемента в массиве.

14. `filter()`: Создает новый массив со всеми элементами, которые проходят тест, предоставленный в виде функции.

15. `reduce()`: Применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.

16. `reduceRight()`: Применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.

17. `some()`: Проверяет, удовлетворяет ли хотя бы один элемент в массиве условию, заданному в передаваемой функции.

18. `every()`: Проверяет, удовлетворяют ли все элементы в массиве условию, заданному в передаваемой функции.

### Преобразование массивов:

> _(Эти методы представляют собой полезные инструменты для работы с массивами, позволяя комбинировать, преобразовывать и выпрямлять их структуры для различных задач программирования.)_

19. `concat()`: Объединяет два или более массива/значения и возвращает новый массив.

20. `join()`: Объединяет все элементы массива в строку.

21. `split()`: Разделяет строки на массив подстрок на основе указанного разделителя.

22. `toString()`: Возвращает строковое представление массива и его элементов.

23. `toLocaleString()`: Возвращает строковое представление элементов массива, преобразованных в строки с использованием локализованных настроек.

24. `flat()`: Возвращает новый массив с подмассивами, вложенными на указанный уровень глубины.

25. `flatMap()`: Первым делом применяет функцию к каждому элементу массива, а затем выпрямляет результат в новый массив.

### Другие методы:

> _(Эти методы являются частью стандартной библиотеки JavaScript и предоставляют различные способы манипулирования и трансформации массивов.)_

26. `sort()`: Сортирует элементы массива на месте и возвращает отсортированный массив.

27. `reverse()`: Обращает массив на месте. Первый элемент массива становится последним, а последний — первым.

28. `fill()`: Заполняет все элементы массива от начального до конечного индекса одним значением.

29. `copyWithin()`: Копирует последовательность элементов массива внутри массива в позицию, начиная с целевого индекса.

> **Set** - это структура данных в JavaScript, предназначенная для **хранения уникальных значений**. Она может содержать любые типы данных, и **все её элементы должны быть уникальными**. Таким образом, Set автоматически удаляет дубликаты.

---

---

## Примеры выполнения:

### 1. **Метод `push()`**:

```javascript
let fruits = ["apple", "banana"];
let newLength = fruits.push("orange"); // Добавляем 'orange' в конец массива
console.log(fruits); // Выведет: ['apple', 'banana', 'orange']
console.log(newLength); // Выведет: 3
```

### 2. **Метод `pop()`**:

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop(); // Удаляет 'orange' из конца массива
console.log(fruits); // Выведет: ['apple', 'banana']
console.log(lastFruit); // Выведет: 'orange'
```

### 3. **Метод `shift()`**:

```javascript
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits.shift(); // Удаляет 'apple' из начала массива
console.log(fruits); // Выведет: ['banana', 'orange']
console.log(firstFruit); // Выведет: 'apple'
```

### 4. **Метод `unshift()`**:

```javascript
let fruits = ["banana", "orange"];
let newLength = fruits.unshift("apple"); // Добавляем 'apple' в начало массива
console.log(fruits); // Выведет: ['apple', 'banana', 'orange']
console.log(newLength); // Выведет: 3
```

### 5. **Метод `splice()`**:

```javascript
let fruits = ["apple", "banana", "orange", "mango"];
// Удаляем 2 элемента, начиная с индекса 1 (удаляем 'banana' и 'orange')
let removedItems = fruits.splice(1, 2);
console.log(fruits); // Выведет: ['apple', 'mango']
console.log(removedItems); // Выведет: ['banana', 'orange']
```

### 6. **Метод `slice()`**:

```javascript
let fruits = ["apple", "banana", "orange", "mango"];
// Создаем копию массива, начиная с индекса 1 и до индекса 3 (не включая его)
let citrus = fruits.slice(1, 3);
console.log(fruits); // Выведет: ['apple', 'banana', 'orange', 'mango']
console.log(citrus); // Выведет: ['banana', 'orange']
```

### 7. **Метод `indexOf()`**:

```javascript
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana"); // Находит первое вхождение 'banana'
console.log(index); // Выведет: 1
```

### 8. **Метод `lastIndexOf()`**:

```javascript
let fruits = ["apple", "banana", "orange", "banana"];
let lastIndex = fruits.lastIndexOf("banana"); // Находит последнее вхождение 'banana'
console.log(lastIndex); // Выведет: 3
```

### 9. **Метод `find()`**:

```javascript
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find((element) => element > 10); // Находит первое число больше 10
console.log(found); // Выведет: 12
```

### 10. **Метод `findIndex()`**:

```javascript
let numbers = [5, 12, 8, 130, 44];
let foundIndex = numbers.findIndex((element) => element > 10); // Находит индекс первого числа больше 10
console.log(foundIndex); // Выведет: 1
```

### 11. **Метод `includes()`**:

```javascript
let fruits = ["apple", "banana", "orange"];
let includesOrange = fruits.includes("orange"); // Проверяет, содержит ли массив 'orange'
console.log(includesOrange); // Выведет: true
```

### 12. **Метод `forEach()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number); // Выведет каждое число в консоль
});
```

### 13. **Метод `map()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((number) => number * number);
console.log(squares); // Выведет: [1, 4, 9, 16, 25]
```

### 14. **Метод `filter()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Выведет: [2, 4]
```

### 15. **Метод `reduce()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Выведет: 15
```

### 16. **Метод `reduceRight()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sumRight = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumRight); // Выведет: 15
```

### 17. **Метод `some()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven); // Выведет: true
```

### 18. **Метод `every()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every((number) => number > 0);
console.log(allPositive); // Выведет: true
```

### 19. **Метод `concat()`**:

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
let combinedArray = array1.concat(array2, array3);
console.log(combinedArray); // Выведет: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 20. **Метод `join()`**:

```javascript
let elements = ["Fire", "Air", "Water"];
let result = elements.join(", ");
console.log(result); // Выведет: 'Fire, Air, Water'
```

### 21. **Метод `split()`**:

```javascript
let str = "one,two,three";
let array = str.split(","); // Используем запятую в качестве разделителя
console.log(array); // Выведет: ["one", "two", "three"]

let str = "one,two,three,four";
let array = str.split(",", 2); // Ограничиваем количество элементов до 2
console.log(array); // Выведет: ["one", "two"]
```

### 22. **Метод `toString()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
let string = numbers.toString();
console.log(string); // Выведет: '1,2,3,4,5'
```

### 23. **Метод `toLocaleString()`**:

```javascript
let prices = [1000.5, 2000.75, 3000];
let localizedString = prices.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(localizedString); // Выведет что-то вроде: '1.000,50 €,2.000,75 €,3.000,00 €' в зависимости от локали

const array = [new Date(), "apple", "banana"];
const string = array.toLocaleString();
// Результат зависит от локали, например: '2/2/2024, 2:43:13 PM, apple, banana'
```

### 24. **Метод `flat()`**:

```javascript
let nestedArray = [1, [2, [3, [4]], 5]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Выведет: [1, 2, 3, [4], 5]
```

### 25. **Метод `flatMap()`**:

```javascript
let numbers = [1, 2, 3, 4];
let doubledAndFlattened = numbers.flatMap((x) => [x, x * 2]);
console.log(doubledAndFlattened); // Выведет: [1, 2, 2, 4, 3, 6, 4, 8]
```

### 26. **Метод `sort()`**:

```javascript
let numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // Выведет: [1, 2, 3, 4, 5]

let words = ['banana', 'apple', 'cherry'];
words.sort();
console.log(words); // Выведет: ['apple', 'banana', 'cherry']

Для чисел часто используется функция сравнения в sort(), чтобы сортировать элементы как числа:
numbers.sort((a, b) => a - b);
```

### 27. **Метод `reverse()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Выведет: [5, 4, 3, 2, 1]
```

### 28. **Метод `fill()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers); // Выведет: [1, 2, 0, 0, 5]
```

### 29. **Метод `copyWithin()`**:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 4);
console.log(numbers); // Выведет: [4, 2, 3, 4, 5]
```
