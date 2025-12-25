# Установка и настройка `create-react-app`

Описание

Актуальную информацию по `Create React App` можно найти [на официальнос сайте](https://create-react-app.dev/)

> Перед запуском скрипта необходимо установить node.js

Запуск создания проекта React

```
 npx create-react-app my-app
```

### До настройка проекта

#### Создания файла `.editorconfig`

[Официальный сайт EditorConfig](https://editorconfig.org/)

```
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8
indent_style = space
indent_size = 4
```

#### Установка зависимость (плагин) editorconfig

Установить плагин в VS Code `EditorConfig for VS Code`

#### Установка prettier и eslint

```
npm i eslint-config-prettier eslint-plugin-prettier prettier
```

После установки плагинов, необходимо их добавить в проект в `package.json`

```json
...
"eslintConfig": {
	"extends": [
		"react-app",
		"react-app/jest",
		"prettier" //new
	],
	"plugins": [ //new
		"prettier" //new
	] //new
}
...
```

#### Создать файл `.prettierrc.json` в корне проекта `my-app`

```json
{
  "printWidth": 100,
  "tabWidth": 4,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

альтернатива

```json
{
  "trailingComma": "all",
  "printWidth": 90,
  "useTabs": true,
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always"
}
```

Проверка формирование `Alt + Shift + F`

[Назад](/pages/react/README.md)
