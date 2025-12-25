# Сборщик проектов Webpack

Описание

## Установка и конфигурация

### Инициализация проекта:

```
npm init -y
```

### Установка и настройка Webpack:

[официальный сайт сборщика Webpack](https://webpack.js.org/guides/getting-started)

Для начала установим два основных пакета с помощью команды:

```
npm install webpack webpack-cli --save-dev
или
npm i -D webpack webpack-cli
```

### Создание конфигурационного файла `webpack.config.js`:

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

### Установка плагина HtmlWebpackPlugin:

```
npm install --save-dev html-webpack-plugin
или
npm i -D html-webpack-plugin
```

### Подключаем плагин в файле `webpack.config.js` импортируя `HtmlWebpackPlugin` и добавим вызов в секцию `plugin`:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
```

## Установка Babel

```
npm install --save-dev babel-loader @babel/core @babel/preset-env
или
npm i -D babel-loader @babel/core @babel/preset-env
```

После установки данных пакетов нужно убедиться что в файле `package.json` добавилась секция `devDependencies` со списком установленных пакетов.

### Добавление плагинов в конфиг `webpack.config.js`:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

## Добавление плагинов для поддержки стилей:

```
npm install --save-dev style-loader css-loader
или
npm i -D style-loader css-loader
```

### Добавление правило в `module.rules` для поддержки стилей:

```javascript
module: {
  rules: [
    //	Правило для babel-loader
    // ...
    {
      test: /.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ];
}
```

## Добавление правило для поддержки картинок в `webpack.config.js`:

```javascript
module: {
  rules: [
    //	Правила babel-loader, css
    // ...
    {
      test: /.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  ];
}
```

### Добавление картинки на страницу

```javascript
import "./index.css";
import MY_IMAGE from "./assets/image.png";

// ... код ...

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);
```

где - _assets_ это созданная папка в корне проекта.

## Сборка проекта

Для запуска сборки, необходимо в файле `package.json` в секции `scripts` прописать:

```
"scripts":  {
	"start":  "webpack"
}
```

### Запуск проекта:

```
npm run start
```

## Локальный сервер

Необходимо установить плагин для работы на локальном сервере:

```
npm install --save-dev webpack-dev-server
или
npm i -D webpack-dev-server
```

### Добавление секции в файле `webpack.config.js` для работы локального сервера:

```
module: {
	// ...
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 8080,
		open: true
	}
}
```

### Обновление скрипта в `package.json` для запуска сборки:

```
"scripts":  {
	"start":  "webpack serve --mode=development",
	"build":  "webpack --mode=production"
}
```

### Запуск проекта с локальным сервером:

```
npm run start
```

### P.S. Удаление плагина:

```
npm uninstall <название_плагина>
```
