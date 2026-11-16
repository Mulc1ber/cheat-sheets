# Методы объекта

Описание

## Список методов объектов:

### **`entries`**: Возвращает новый объект итератора массива, содержащий пары ключ-значение для каждого индекса.

```javascript
const array = ["a", "b", "c"];
const iterator = array.entries();
for (const [index, value] of iterator) {
  console.log(index, value);
}
// Вывод:
// 0 'a'
// 1 'b'
// 2 'c'
```

### **`keys`**: Возвращает новый объект итератора массива, содержащий ключи для каждого индекса.

```javascript
const array = ["a", "b", "c"];
const iterator = array.keys();
for (const index of iterator) {
  console.log(index);
}
// Вывод:
// 0
// 1
// 2
```

### **`values`**: Возвращает новый объект итератора массива, содержащий значения для каждого индекса.

```javascript
const array = ["a", "b", "c"];
const iterator = array.values();
for (const value of iterator) {
  console.log(value);
}
// Вывод:
// 'a'
// 'b'
// 'c'
```
