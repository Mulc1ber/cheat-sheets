---
sidebar_position: 1
title: Команды Docker
description: Список часто используемых docker-команд
---

## ЗАПУСТИТЬ НОВЫЙ КОНТЕЙНЕР

Старт нового контейнера из образа

```bash
docker run IMAGE
docker run nginx
```

Указать название контейнера при запуске

```bash
docker run --name CONTAINER IMAGE
docker run --name web nginx
```

Запуск контейнера с привязкой порта

```bash
docker run -p HOSTPORT:CONTAINERPORT IMAGE
docker run -p 8080:80 nginx
```

Запуск контейнера в фоновом режиме

```bash
docker run -d IMAGE
docker run -d nginx
```

Запуск контейнера с переменной окружения

```bash
docker run -e "VARIABLE=VALUE" IMAGE
docker run -e "ENV=prod" nginx
```

Запуск контейнера с ограничением по памяти

```bash
docker run -m MEMORY_LIMIT IMAGE
docker run -m 512m nginx
```

Запуск контейнера с открытием терминала и интерактивным режимом

```bash
docker run -it IMAGE /bin/bash
docker run -it ubuntu /bin/bash
```

Запуск контейнера с указанием сети

```bash
docker run --network NETWORK IMAGE
docker run --network my_network nginx
```

Запуск контейнера с ограничением количества перезапусков с случае падения

```bash
docker run --restart on-failure: RESTART_COUNT IMAGE
docker run --restart on-failure:5 nginx
```

Запуск контейнера с указанием количества CPU

```bash
docker run --cpus="NUMBER" IMAGE
docker run --cpus="1.5" nginx
```

Запуск контейнера с подключением к другим контейнерам

```bash
docker run --link CONTAINER:ALIAS IMAGE
docker run --link db_container:db nginx
```

---

## УПРАВЛЕНИЕ КОНТЕЙНЕРАМИ

Остановка контейнера

```bash
docker stop CONTAINER
docker stop web
```

Остановка всех запущенных контейнеров

```bash
docker stop $(docker ps -q)
```

Посмотреть список запущенных контейнеров

```bash
docker ps
```

Показать список вообще всех контейнеров (включая незапущенные)

```bash
docker ps -a
```

Принудительная остановка контейнера (без ожидания)

```bash
docker kill CONTAINER
docker kill web
```

Приостановка контейнера

```bash
docker pause CONTAINER
docker pause web
```

Возобновление работы приостановленного контейнера

```bash
docker unpause CONTAINER
docker unpause web
```

Перезапуск контейнера

```bash
docker restart CONTAINER
docker restart web
```

Удаление контейнера

```bash
docker rm CONTAINER
docker rm web
```

Принудительное удаление работающего контейнера

```bash
docker rm -f CONTAINER
docker rm -f web
```

Отображение информации о ресурсоемкости контейнера (CPU, память, сеть, диск)

```bash
docker stats CONTAINER
docker stats web
```

Войти в работающий контейнер (интерактивный режим)

```bash
docker exec -it CONTAINER /bin/bash
docker exec -it web /bin/bash
```

Просмотр логов контейнера

```bash
docker logs CONTAINER
docker logs web
```

Удаление всех остановленных контейнеров

```bash
docker container prune
```

---

## РАБОТА С ОБРАЗАМИ (IMAGES)

Список всех локально доступных образов

```bash
docker images
```

Загрузка образа из Docker Hub

```bash
docker pull IMAGE
docker pull postgres
```

Удаление образа

```bash
docker rmi IMAGE
docker rmi postgres
```

Удаление неиспользуемых образов

```bash
docker image prune
```

Удаление всех образов

```bash
docker rmi $(docker images -q)
```

Создание образа из Dockerfile

```bash
docker build -t IMAGE_NAME .
docker build -t my_app .
```

Просмотр истории образа

```bash
docker history IMAGE
docker history postgres
```

Поиск образов в Docker Hub

```bash
docker search TERM
docker search postgres
```

Импорт образа из файла

```bash
docker load < FILE.tar
docker load < my_image.tar
```

Экспорт образа в файл

```bash
docker save IMAGE > FILE.tar
docker save postgres > postgres_image.tar
```

---

## РАБОТА С СЕТЯМИ

Создание сети

```bash
docker network create NETWORK_NAME
docker network create my_network
```

Список всех сетей

```bash
docker network ls
```

Подключение контейнера к сети

```bash
docker network connect NETWORK_NAME CONTAINER
```

Отключение контейнера от сети

```bash
docker network disconnect NETWORK_NAME CONTAINER
```

Удаление сети

```bash
docker network rm NETWORK_NAME
```

---

## РАБОТА С ТОМАМИ

Создание тома

```bash
docker volume create VOLUME_NAME
docker volume create my_volume
```

Список всех томов

```bash
docker volume ls
```

Просмотр информации о томе

```bash
docker volume inspect VOLUME_NAME
```

Удаление тома

```bash
docker volume rm VOLUME_NAME
```

---

## ДРУГИЕ КОМАНДЫ

Просмотр общего использования ресурсов

```bash
docker system df
```

Очистка неиспользуемых ресурсов

```bash
docker system prune
```

Посмотреть последние события Docker

```bash
docker events
```

Отображение версии Docker

```bash
docker version
```

Просмотр настроек конфигурации Docker

```bash
docker info
```

Просмотр логов

```bash
docker logs [name-container] --tail 20
```
