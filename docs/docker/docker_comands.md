# DOCKER команды

Описание

## DOCKER Образ

- Список образов

```bash
docker images
```

- Сборка образа с указанием имени

```bash
docker build -t <NAME_IMAGE> .
```

- Запуск с указанием порта, отвязки от терминала и имя образа

```bash
docker run -p 80:3001 -d <NAME_IMAGE>
```

---

## DOCKER Контейнер

- Список контейнеров

```bash
docker ps
```

- Список всех контейнеров и образов

```bash
docker ps -a
```

- Поставить на паузу докер контейнер

```bash
docker pause <NAME_CONTAINER>
```

- Снять с паузы докер контейнер

```bash
docker unpause <NAME_CONTAINER>
```

- Остановить докер контейнер

```bash
docker stop <NAME_CONTAINER>
```

- Запустить докер контейнер

```bash
docker start <NAME_CONTAINER>
```

- Показать логи докер контейнера

```bash
docker logs <HASH>
```

---

## Удаление

- Удалить контейнер

```bash
docker rm <NAME_CONTAINER / ID_CONTAINER>
```

- Удалить образ

```bash
docker rmi <NAME_IMAGE / ID_IMAGE>
```

- Удаляет все не используемые образы

```bash
docker image prune
```
