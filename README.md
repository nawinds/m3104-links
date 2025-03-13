# Сайт полезных ссылок группы M3104 Университета ИТМО — [M3104.nawinds.dev](https://m3104.nawinds.dev)

### Useful links website for M3104 group @ ITMO University — [M3104.nawinds.dev](https://m3104.nawinds.dev)

---

Этот сайт работает на базе проекта [Docusaurus](https://docusaurus.io/), что позволяет легко редактировать его содержимое прямо на GitHub в Markdown и хостить его с помощью GitHub Actions.

## Хотите своей группе такой же?

**Пишите [мне](https://t.me/nawinds)!** Вам понадобится всего лишь сделать форк репозитория, чтобы запустить такой же сайт, а я могу выделить для вашей группы субдомен и направить его на ваш репозиторий. Вы получите возможность быстро и легко вставлять на сайт ссылки для своей группы и актуальные дедлайны. Если возникнут вопросы о том, как и где это делать, с удовольствием отвечу!

### Установка / Installation

```
$ yarn
```

### Локальная разработка / Local Development

```
$ yarn start
```

Эта команда запускает локальный сервер разработки и открывает окно браузера. Большинство изменение применяются в реальном времени без необходимости перезапускать сервер.

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Сборка / Build

```
$ yarn build
```
Эта команда генерирует статический контент в папке `build`, который может быть размещен с помощью любого сервера статического контента.

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Развертывание / Deployment

Используя SSH:

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Не использую SSH:

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

Если Вы используете GitHub Pages для хостинга, эта команда является удобным способом собрать сайт и запушить его в ветку `gh-pages`.

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

#### Редактирование главной страницы

Основное содержимое страниц сайта хранится в виде Markdown файлов в директории [/src/pages](src/pages/).
Для редактирования главной страницы, отредактируйте файл [/src/pages/index.md](src/pages/index.mdx). Остальные файлы 
называются в соответствии с их путями на сайте.

#### Редактирование дедлайнов

Дедлайны хранятся в формате JSON в файле [/static/api-deadlines](static/api-deadlines). Поля `name` и `time` являются обязательными для заполнения у каждого дедлайна, `url` не обязательно, но в него удобно записывать ссылки на дедлайны (то есть на сами лабы, например). Если Вы не хотите указывать `url`, то нужно вообще убрать поле `url` из соответствующего дедлайна.

Чтобы добавить не обычный дедлайн, а тест (или, например, контрольную, теормин и т.д.), в поле `name` перед названием дедлайна напишите `[Тест]`, например, `[Тест] Матан: Контрольная работа по интегрированию`.

#### Редактирование меню и подвала сайта

Содержимое меню и подвала сайта редактируется через файл [docusaurus.config.js](docusaurus.config.js). Просто найдите в этом конфиге `navbar` и `footer`, чтобы добавить или удалить оттуда ссылки.

#### Редактирование номера группы и информации о сайте

1. Измените `title` на номер Вашей группы, `url` на актуальный адрес сайта, `organizationName` и `projectName` на юзернейм владельца репозитория и название репозитория на GitHub в файле [docusaurus.config.js](docusaurus.config.js).
2. Измените номер группы в файле [manifest.json](static/manifest.json).
3. Измените иконки сайта на свои ([favicon.ico](static/img/favicon.ico), [favicon-32x32.png](static/img/favicon-32x32.png), [android-chrome-192x192.png](static/img/android-chrome-192x192.png), [android-chrome-512x512.png](static/img/android-chrome-512x512.png))
4. Откройте содержимое всех страниц в директории [pages](src/pages), измените номер группы и другую информацию на актуальную в `title` и `description`, измените ссылки на редактирование страницы внизу .mdx файлов.

### Другие вопросы по настройке сайта

Чтобы настроить сайт под себя, вы можете обратиться к документации [Docusaurus](https://docusaurus.io/docs).

## Поддержать проект

Поддержите проект, сделав **[перевод на Т-Банк](https://www.tbank.ru/cf/4tI8tyioxMb)** или став моим спонсором на **[GitHub Sponsors](https://github.com/sponsors/nawinds)**!

Собранные средства мотивируют развивать сайт, добавлять новые фичи, а также подумать над созданием других полезных сервисов в рамках ИТМО.
