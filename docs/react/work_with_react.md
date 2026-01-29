---
sidebar_position: 2
title: Иммутабельность
description: Пример реализации иммутабельности через копирование
---

# Копирование объектов

### 5 способов скопировать объект

> При сохранении иммутабельности, скопировать объекст можно следующими способами

```javascript
// Исходный объект
const obj1 = { name: "oleg" };
```

---

```javascript title="С помощью Spread оператора"
const obj2 = { ...obj1 };
```

```javascript title="С помощью Object.assign()"
const obj2 = Object.assign({}, obj1);
```

```javascript title="С помощью JSON"
const obj2 = JSON.parse(JSON.stringify(obj1));
```

```javascript title="С помощью structuredClone() - глубокое копирование"
const obj2 = structuredClone(obj1);
```

```javascript title="С помощью cloneDeep() - из библиотеки утилит JavaScript Lodash"
const obj2 = _.cloneDeep(obj1);
```
