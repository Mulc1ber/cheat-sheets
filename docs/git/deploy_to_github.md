# Варианты деплоя на GitHub

Описание

## Вариант 1. Ручной деплой с использованием `gh-pages`

### 1. Установите пакет gh-pages:

```bash
npm install --save-dev gh-pages
```

### 2. Добавьте скрипты в package.json:

```bash
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d build"
  }
}
```

### 3. Выполните деплой:

```bash
npm run deploy
```

### 4. Настройка GitHub Pages

- Перейдите в репозиторий на GitHub
- Настройки → Pages
- Source: выберите GitHub Actions (если используете Способ A) или ветку gh-pages (если используете Способ B)
- Нажмите Save

### 5. Проверка

После деплоя ваш сайт будет доступен по адресу:

- `https://username.github.io/repository-name/` (для проектного сайта)
- `https://username.github.io/` (для пользовательского сайта)

### Важные моменты:

#### 1. Для пользовательского сайта (`username.github.io`):

- Репозиторий должен называться `username.github.io`
- В настройках `baseUrl: '/'`

#### 2. Для проектного сайта (`username.github.io/repository-name`):

- Можно использовать любой репозиторий
- В настройках `baseUrl: '/repository-name/'`

#### 3. Если возникает проблема с маршрутизацией:

- Создайте файл `static/.nojekyll` (пустой файл) в корне проекта
- Пересоберите и задеплойте проект

#### 4. Для кастомного домена:

- Добавьте файл `CNAME` в папку `static/` с вашим доменом
- Настройте DNS записи у регистратора домена

## Вариант 2. Использование GitHub Actions

### 1. Создайте файл `workflow` `.github/workflows/deploy.yml`:

```bash
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 2. Настройка репозитория

#### Ветка

Убедитесь, что `workflow` настроен на правильную ветку (обычно `main` или `master`):

```bash
on:
  push:
    branches: [main, master]  # ← ваша основная ветка
```

#### docusaurus.config.js

Проверьте настройки:

```bash
module.exports = {
  url: 'https://username.github.io',
  baseUrl: '/repository-name/',
  organizationName: 'username',
  projectName: 'repository-name',
  // ...
};
```

### 3. Настройки GitHub репозитория

- Перейдите в репозиторий на GitHub
- **Settings → Actions → General**
  - Разрешите чтение и запись permissions (обычно уже разрешено)
- **Settings → Pages**
  - Source: выберите **"GitHub Actions"**

### 4. Токены и разрешения (обычно не требуются)

Для публичных репозиториев все работает "из коробки". Для приватных:

Нужен `GH_PAT` (Personal Access Token) в Secrets

### 5. Дополнительные файлы (рекомендуется)

#### .gitignore

Убедитесь, что не игнорируются нужные файлы:

```bash
# Обычно достаточно стандартного .gitignore
node_modules/
.build/
.cache/
```

#### static/.nojekyll (если есть проблемы)

Создайте пустой файл в `static/.nojekyll` чтобы GitHub Pages не использовал Jekyll.

### 6. Первый запуск

- Закоммитьте и запушьте файл `workflow`
- Проверьте выполнение
  - Зайдите на GitHub в ваш репозиторий
  - Вкладка Actions
  - Должен появиться запущенный workflow
