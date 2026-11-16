# Сборщик проектов Rollup

Описание

## Базовая конфигурация проекта

### Инициализация проекта

```
npm init -y
```

### Установка и настройка Rollup

```
npm install --global rollup
```

### Создание конфигурационного файла `rollup.config.mjs`

```javascript
export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
};
```

### Сборка проекта

```
rollup -c
```

### Проверка

```
<!DOCTYPE html>
<html>

<head>
  <title>Rollup test</title>
</head>

<body>
  <script src="build/bundle.js"></script>
</body>

</html>
```

## Установка дополнительных пакетов для сборки Rollup

## Установка Babel

```
npm install --save-dev @rollup/plugin-babel @babel/core
или
npm i -D @rollup/plugin-babel @babel/core
или
npm i -D @rollup/plugin-babel @babel/preset-env
```

и

```
npm install --save-dev @babel/preset-env @rollup/plugin-node-resolve
или
npm i -D @babel/preset-env @rollup/plugin-node-resolve
```

После установки данных пакетов нужно убедиться что в файле `package.json` добавилась секция `devDependencies` со списком установленных пакетов.

### Добавление плагинов в конфиг `rollup.config.mjs`

```javascript
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" })],
};
```

### Добавление файла с именем `.babelrc.json` в проект с начальной настройкой пресета

```javascript
{
  "presets": ["@babel/env"]
}
```

## Плагин для работы со стилями

```
npm i -D rollup-plugin-styles
```

### Далее добавляем информaцию в конфиг rollup

```javascript
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" }), styles()],
};
```

### Добавление css файла в файл index.js

```javascript
import "./index.css";

function hello() {
  console.log("Hello world!");
}

hello();
```

## Плагин для работы с картинками

```
npm i -D @rollup/plugin-image
```

### Обновление конфиг файла `rollup.config.mjs`

```javascript
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" }), styles(), image()],
};
```

### Добавление картинки на страницу

```javascript
import "./index.css";
import MY_IMAGE from "./assets/image.png";

// Остальной код

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);
```

где - _assets_ это созданная папка в корне проекта.

## Локальный сервер

```
npm install -D rollup-plugin-serve
```

### Обновление конфига `rollup.config.mjs`

```javascript
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import serve from "rollup-plugin-serve";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: "bundled" }),
    styles(),
    image(),
    serve({ open: true }),
  ],
};
```

После запуска сборки `rollup -c` страница в браузере должна открыться по адресу `http://localhost:10001/` (если мы не указали другой порт в настройках плагина).

## Автоматическое применение изменений

```
npm i -D rollup-plugin-livereload
```

#### Обновление конфига `rollup.config.mjs`

```javascript
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: "bundled" }),
    styles(),
    image(),
    serve({ open: true }),
    livereload(),
  ],
};
```

### Для отслеживания изменений в исходном коде запустим сборку с дополнительным флагом -w (watch).

```
rollup -c -w
```
