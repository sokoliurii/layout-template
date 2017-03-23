# Шаблон для верстки

### Установка шаблона:
```sh
npm i
```
## Команды:
#### Запуск шаблона:
```sh
npm run start
```
#### Генерация типографики:
```sh
npm run font-face
```
#### Удаление папки public:
```sh
npm run delete
```
## Структура папок и файлов
```
├── app/                          # Исходная директория
│   ├── fonts/                    # Шрифты
│   ├── img/                      # Исходные картинки
│   │   └── favicons/             # Фавиконки
│   │   └── sprite/               # Папка для генерации спрайтов
│   ├── js/                       # Скрипты
│   │   └── vendor/               # Вендорные скрипты
│   │   └── plugins.js            # Файл для подключения плагинов
│   │   └── script.js             # Главный скрипт
│   └── sass/                     # Стили
│   │   ├── base                  # Базовые стили
│   │   │   ├── mixins/           # Миксины шаблона
│   │   │   ├── _base.scss        # Базовые стили шаблона
│   │   │   ├── _default.scss     # Сброс стилей
│   │   │   ├── _typography.scss  # Подключение шрифтов
│   │   │   └── _variables.scss   # Переменные стилей
│   │   ├── blocks/               # Стили блоков
│   │   ├── libs/                 # Библиотеки
│   │   └── style.scss            # Корневой файл стилей
│   └── index.html                # Страница
├── public/                       # Директория сборки
│   ├── css/                      # Стили
│   ├── img/                      # Изображения
│   │   └── favicons/             # Фавиконки
│   ├── js/                       # Скрипты
│   └── index.html                # Страница
├── tasks/                        # Подключаемые скрипты с задачами для gulpfile.babel.js
│   ├── assets/                   # Дополнительные файлы сборщика
│   │   ├── gulp.png              # Картинка ошибки сборщика
│   │   └── font-face.js          # Утилита для генерации типографики проекта
│   ├── assets.js                 # Копирование
│   ├── assets-scripts.js         # Копирование скриптов
│   ├── default.js                # Сборка проекта и запуск watcher'а
│   ├── error.js                  # Обработчик ощибок
│   ├── fonts.js                  # Копирование шрифтов
│   ├── images.js                 # Сжатие картинок
│   ├── scripts.js                # Сборка ES2015 скриптов
│   ├── server.js                 # Запуск локального сервера
│   ├── sprite.js                 # Сборка спрайтов
│   ├── styles.js                 # Сборка стилей
│   └── watch.js                  # Настройка watcher'а
├── .babelrc                      # Конфигурация babel
├── .editorconfig                 # Конфигурация настроек редактора кода
├── .gitignore                    # Список исключённых файлов из Git
├── gulpfile.babel.js             # Файл для запуска Gulp.js
├── package.json                  # Список модулей и прочей информации
├── readme.md                     # Документация шаблона
```