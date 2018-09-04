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
#### Production сборка:
```sh
npm run production
```
#### Генерация типографики:
```sh
npm run font-face
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
│   └── css/                      # Стили
│   │   ├── base                  # Базовые стили
│   │   │   ├── base.scss         # Базовые стили шаблона
│   │   │   ├── default.scss      # Сброс стилей
│   │   │   ├── typography.scss   # Подключение шрифтов
│   │   │   └── variables.scss    # Переменные стилей
│   │   ├── blocks/               # Стили блоков
│   │   └── style.scss            # Корневой файл стилей
│   └── index.html                # Страница
├── dist/                         # Директория сборки
│   ├── css/                      # Стили
│   ├── img/                      # Изображения
│   │   └── favicons/             # Фавиконки
│   ├── js/                       # Скрипты
│   └── index.html                # Страница
├── tasks/                        # Таски проекта
├── .babelrc                      # Конфигурация babel
├── .editorconfig                 # Конфигурация настроек редактора кода
├── .eslintrc                     # Конфигурация ESLint
├── .gitignore                    # Список исключённых файлов из Git
├── .stylelintrc                  # Конфигурация stylelint
├── gulpfile.babel.js             # Файл для запуска Gulp.js
└── package.json                  # Список модулей и прочей информации
```
