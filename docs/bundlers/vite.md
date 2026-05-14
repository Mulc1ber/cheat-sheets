# Сборщик проектов Vite

## 1. Установка и создание проекта

Создание нового проекта с шаблоном (vanilla, vue, react, preact, lit, svelte):

```bash
npm create vite@latest
```

_(В интерактивном диалоговом окне в терминале выберается имя и фреймворк)_

Или сразу указать параметры:

```bash
# vanilla (чистый JS)
npm create vite@latest my-app -- --template vanilla

# React (JS)
npm create vite@latest my-react-app -- --template react

# React + TypeScript
npm create vite@latest my-react-ts-app -- --template react-ts

# Vue
npm create vite@latest my-vue-app -- --template vue
```

Установка зависимостей после создания:

```bash
cd my-app
npm install
```

## 2. Режим разработки (Dev-сервер)

Запуск сервера для локальной разработки:

```bash
npm run dev
```

После запуска сервера в браузере откроется страница с адресом `http://localhost:5173/`.

Свой сервер с явным указанием порта:

```bash
npm run dev -- --port 3000
```

Доступ из локальной сети (например, для теста на телефоне):

```bash
npm run dev -- --host
```

## 3. Сборка (Build) для production

Базовая сборка в папку dist/:

```bash
npm run build
```

Сборка с оптимизацией и минификацией:

```bash
npm run build -- --minify
```

Сборка с оптимизацией и минификацией, используя произвольный файл конфигурации:

```bash
npm run build -- --minify --config my-config.js
```

Очистка кэша Vite перед сборкой (редко, но помогает):

```bash
npx vite build --force
```

## 4. Превью собранного проекта

Локальный сервер, показывающий содержимое папки dist/ как в продакшне:

```bash
npm run preview
```

Превью на конкретном порту:

```bash
npm run preview -- --port 5000
```

Превью с доступом из сети:

```bash
npm run preview -- --host
```

## 5. Настройка окружения (Env)

Vite подгружает переменные из:

- `.env` — все режимы
- `.env.local` — игнорируется git
- `.env.development` — при `dev`
- `.env.production` — при `build` и `preview`

Пример `.env` файла:

```bash
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Мой проект
```

Доступ в коде:

```js
console.log(import.meta.env.VITE_API_URL);
```

Проверить итоговые переменные окружения (вывод в консоль):

```bash
npx vite dev --debug
```

## 6. Деплой (основные команды)

```bash
npm run build          # 1. собрать проект
cd dist                # 2. перейти в папку со сборкой
```

Деплой на GitHub Pages (если настроен gh-pages):

```bash
npm run build
npx gh-pages -d dist
```

Деплой на Netlify (через CLI):

```bash
netlify deploy --prod --dir=dist
```

Деплой на Vercel (через CLI):

```bash
vercel --prod
```

Для ручного копирования на любой хостинг — достаточно залить содержимое папки `dist/` (это статические файлы: HTML, CSS, JS, ассеты).

## 7. Полезные флаги и редко используемое

| Команда                                | Что делает                                        |
| -------------------------------------- | ------------------------------------------------- |
| `npm run build -- --watch`             | Пересборка при изменениях (полезно для библиотек) |
| `npm run build -- --emptyOutDir false` | Не очищать dist/ перед сборкой                    |
| `npx vite optimize --force`            | Принудительно пересобрать кэш зависимостей        |
| `npx vite preview --strictPort`        | Если порт занят — ошибка, а не смена порта        |

Проверка версии Vite:

```bash
npx vite --version
```

Полный список опций для любой команды:

```bash
npx vite --help
npx vite build --help
npx vite preview --help
```
