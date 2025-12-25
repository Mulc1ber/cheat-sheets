# `Date` Объект

Описание

## [MDN Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### `new Date()` - конструктор `Date()` создает объекты Date. При вызове как функция она возвращает строку, представляющую текущее время.

```javascript
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...
```

#### `Date.now()` - возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC по текущий момент времени в качестве

```javascript
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## GET Методы Date:

### Получение даты:

#### `getFullYear()` - получение года

#### `getMonth()` - получение месяца

#### `getDate()` - получение числа месяца

---

### Получение времени:

#### `getHours()` - получение часов

#### `getMinutes()` - получение минут

#### `getSeconds()` - получение секунд

#### `getMilliseconds()` - получение миллисекунд

---

#### `getTime()` - получение количество миллисекунд, прошедших с 1 января 1970 года по дату переданную в виде аргумента.

#### `getTimezoneOffset()`

## SET Методы Date:

### Изменение даты:

#### `setFullYear()` - изменение года

#### `setMonth()` - изменение месяца

#### `setDate()` - изменение числа месяца

---

### Изменение времени:

#### `setHours()` - изменение часов

#### `setMinutes()` - изменение минут

#### `setSeconds()` - изменение секунд

#### `setMilliseconds()` - изменение миллисекунд

---

#### `setTime()`

#### `setTimezoneOffset()`

---

## Создание даты через разные аргументы:

```javascript
const date = new Date(2014, 2, 1, 13, 0, 59, 0);
console.log(date); //  Sat Mar 01 2014 13:00:59 GMT+0400
```

```javascript
// Now
new Date();
```

```javascript
// ms since epoch
new Date(1393678859000);
```

```javascript
// Date format
new Date("March 1, 2014 13:00:59");
```

```javascript
// ISO date format
new Date("2014-03-01T13:00:59");
```

---

<br />

```javascript
const date = new Date(year, month, date, hours, minutes, seconds, ms);
```

<br />

| Arguments | Description                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Year`    | принимает в себя - `год`                                                                                                                               |
| `Month`   | принимает в себя - `месяц`. Также стоит отметить, что в JavaScript месяцы нумеруются от 0 до 11. То есть январь - это число `0`, а декабрь - это `11`. |
| `Day`     | принимает в себя - `день`                                                                                                                              |
| `Hour`    | принимает в себя - `часы`                                                                                                                              |
| `Min`     | принимает в себя - `минуты`                                                                                                                            |
| `Sec`     | принимает в себя - `секунды`                                                                                                                           |
| `Milli`   | принимает в себя - `миллисекунды`                                                                                                                      |

<br />

---

## Parse Методы Date:

| Methods                  | Date Format                               | Descriptions                                                                                                                 |
| ------------------------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `d.toString()`           | "Sat Mar 01 2014 13:00:59 GMT+0000 (GMT)" | возвращает строковое представление указанного объекта Date.                                                                  |
| `d.toTimeString()`       | "13:00:59 GMT+0000 (GMT)"                 | возвращает часть, содержащую только время объекта Date в виде человеко-читаемой строки на американском английском.           |
| `d.toUTCString()`        | "Sat, 01 Mar 2014 13:00:59 GMT"           | преобразует дату в строку, используя часовой пояс UTC.                                                                       |
| `d.toDateString()`       | "Sat Mar 01 2014"                         | возвращает часть, содержащую только дату объекта Date в виде человеко-читаемой строки на американском английском.            |
| `d.toISOString()`        | "2014-03-01T13:00:59.000Z"                | возвращает строку в формате ISO                                                                                              |
| `d.toLocaleString()`     | "3/1/2014, 1:00:59 PM"                    | экземпляров Date возвращает строку, содержащую зависимое от языка представление этой даты в локальном часовом поясе.         |
| `d.toLocaleDateString()` | "3/1/2014"                                | возвращает строку с языкозависимым представлением части с датой в этой дате.                                                 |
| `d.toLocaleTimeString()` | "1:00:59 PM"                              | экземпляров Date возвращает строку, содержащую зависимое от языка представление времени этой даты в локальном часовом поясе. |

## Примеры:

#### `.toLocaleDateString()`

```javascript
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleDateString("en-US"));
// '12/20/2012'
console.log(event.toLocaleDateString("ru-RU"));
// '20.12.2012'
```

```javascript
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(event.toLocaleDateString("en-US", options));
// 'Thursday, December 20, 2012'
console.log(event.toLocaleDateString("ru-RU", options));
// 'четверг, 20 декабря 2012 г.'
```
