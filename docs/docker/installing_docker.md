# Команды по установке docker на удаленный сервер

Описание

> Акутальная информация по установке на различные ОС находятся по ссылке ниже

[Official site Docker docs](https://docs.docker.com/engine/install/ubuntu/)

## Удаление старых версий

```bash
# Выполните следующую команду, чтобы удалить все конфликтующие пакеты

for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

## Установка с использованием репозитория apt

> Перед первой установкой Docker Engine на новый хост-компьютер необходимо настроить репозиторий Docker apt.
> После этого вы сможете устанавливать и обновлять Docker из репозитория.

1. Настройте репозиторий Docker

```bash
# Добавьте официальный ключ GPG Docker:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Добавьте репозиторий в источники Apt:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Установите пакеты Docker.

```bash
# Установка последней версии

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
# Служба Docker запускается автоматически после установки. Чтобы проверить, запущен ли Docker, выполните команду

sudo systemctl status docker
```

```bash
# В некоторых системах это поведение может быть отключено, и потребуется ручной запуск

sudo systemctl start docker
```

3. Убедитесь, что установка прошла успешно, запустив образ hello-world

> Эта команда загружает тестовый образ и запускает его в контейнере. После запуска контейнер выводит сообщение с подтверждением и завершает работу.

```bash
# Запуск образа hello-world

sudo docker run hello-world
```
