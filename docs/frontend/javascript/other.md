# Остальное (в разработке)

Описание

Что в планах описать:

- JSON
- Firebase (руководство по работе с БД)
- Сетевые запросы:
- Fetch
- Promise
- API:
- JSON Placeholder

## Контент без категории (временно)

#### Коллекция классов classList

[Свойство](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) [_classList_](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) содержит в себе коллекцию классов элемента:

```javascript
const p = document.querySelector("p");
const classList = p.classList;
```

В нашем примере коллекция будет содержать единственное значение _"text"_.

У _classList_ есть несколько методов:

- [Метод _add()_](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) — добавляет класс к элементу
- [Метод _remove()_](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove) — удаляет класс
- [Метод _toggle()_](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) — добавляет класс, если его ещё нет, иначе удаляет
- [Метод _replace()_](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace) — заменяет один класс другим
- [Метод _contains()_](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace) — сравнивает, является ли узел потомком данного узла, т. е. сам узел, один из его прямых потомков ( `childNodes` ), один из детей его детей и так далее.

---

#### DOM Elements

`remove()` - удаляет элемент из DOM-дерева.

`closest()` - находит ближайший родительский элемент по заданному селектору. Сам элемент тоже включается в поиск, то есть если сам элемент удовлетворяет условию селектора, то будет возвращен он.

#### Работа с атрибутами:

`.hasAttribute('<name attribute>')` -> имеет ли элемент указанный атрибут. Возвращает булево значение

`.getAttribute('<name attribute>')` -> получает значение атрибута по имени

`.removeAttribute('<name attribute>')` -> удаляет атрибут

`.setAttribute('<name attribute>')` -> устанавливает значение атрибута
