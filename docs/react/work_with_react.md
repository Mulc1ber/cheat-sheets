# Копирование объектов (Иммутабельности)

Описание

### 5 способов скопировать объект

> При сохранении иммутабельности, скопировать объекст можно следующими способами

```javascript
// Исходный объект
const obj1 = { name: "oleg" };
```

---

1. С помощью spread

```javascript
const obj2 = { ...obj1 };
```

2. С помощью Object.assign()

```javascript
const obj2 = Object.assign({}, obj1);
```

3. С помощью JSON

```javascript
const obj2 = JSON.parse(JSON.stringify(obj1));
```

4. С помощью structuredClone() - глубокое копирование.

```javascript
const obj2 = structuredClone(obj1);
```

5. с помощью cloneDeep() - из библиотеки утилит JavaScript Lodash.

```javascript
const obj2 = _.cloneDeep(obj1);
```
