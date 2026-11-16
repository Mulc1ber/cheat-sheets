# Методы строк

Описание

## Список методов строк:

### Длина строки

`length`: Устанавливает или возвращает число элементов этого массива.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.length); // 22
```

### Смена регистра

`toLowerCase()`: Возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.toLowerCase()); // "мой любимый javascript"
```

`toUpperCase()`: Возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.toUpperCase()); // "МОЙ ЛЮБИМЫЙ JAVASCRIPT"
```

### Поиск символов в строке

`indexOf()`: Возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если такого индекса нет.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.indexOf("JavaScript")); // 11
```

`includes()`: Определяет, содержит ли массив определенный элемент, возвращая true или false соответственно.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.includes("JavaScript")); // true
```

### Обрезка строк

`slice()`: Возвращает новый массив, содержащий копию части исходного массива.

```javascript
let fruits = ["apple", "banana", "orange", "mango"];
// Создаем копию массива, начиная с индекса 1 и до индекса 3 (не включая его)
let citrus = fruits.slice(1, 3);
console.log(fruits); // Выведет: ['apple', 'banana', 'orange', 'mango']
console.log(citrus); // Выведет: ['banana', 'orange']
```

`substring()`: Возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.substring(0, 3)); // "Мой"
console.log(text.substring(3, 0)); // "Мой"

console.log(text.substring(5, 8)); // "юби"
console.log(text.substring(8, 5)); // "юби"

console.log(text.substring(0, 11)); // "Мой любимый"
console.log(text.substring(11, 0)); // "Мой любимый"
```

### Замена символов в строке

`replace()`: Возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.

```javascript
const text = "Мой любимый JavaScript";
console.log(text.replace("JavaScript", "")); // 'Мой любимый'
```

`replaceAll()`: Возвращает новую строку со всеми совпадениями `pattern` , который меняется на `replacement`.

```javascript
const text = 'Мой любимый JavaScript'
console.log(text.replaceAll(a", "A")) // 'Мой любимый JAvAScript'
```

### Повторение строки несколько раз

`repeat()`: Конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

```javascript
const text = "hello";
console.log(text.repeat(3)); // 'hellohellohello'
```

### Удаление лишних пробелов в начале и в конце

`trim()`: Удаляет пробельные символы с начала и конца строки.

```javascript
const nameOfUser = " My name is John ";
console.log(nameOfUser.trim()); // My name is John
```

### Объединение строк

`concat()`: Объединяет две строки и возвращает новую строку.

```javascript
const str1 = "Hello, ";
const str2 = "world!";
const newStr = str1.concat(str2);
console.log(newStr); // Выведет: Hello, world!
```

### Вывод символа по индексу

`charAt()`: Возвращает символ по указанному индексу строки.

```javascript
const str = "Hello";
const charAtIndex2 = str.charAt(2);
console.log(charAtIndex2); // Выведет: l
```
