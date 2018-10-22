# Run

1) `npm i`
2) `npm start` запустит node-server на :3000 и фронт на :4200


# Заметки по работе

В основном, какие бы то ни было решения обусловлены тем, что нужно было сделать быстро. Например не использовал @angular/flex-layout, т.к. он криво встал с текущей версией то ли тайпскрипта, то ли самого Ангуляра. Не было времени разбираться.

* Использовал Material, потому что он мне нравится. Шрифт Roboto по той же причине.
* entity/ - сущности приложения, отвечающие за бизнес-логику, ui/ - компоненты интерфейса, shared/ - все остальное, что общее и не компонент
* Разбит ли роутинг по модулям или лежит в одном месте - не вижу разницы. Я использовал первый вариант.
* Не применял lazyLoading, т.к. тут всего один модуль.

* Хак с тем, как выводятся звезды рейтинга придумал на ходу, мне показалось это забавным и я оставил.
* Классы-адаптеры использую всегда - считаю это удобным.
* Интерфейсы в сервисах, но при разрастании проекта я бы их, конечно, вынес отдельно. 
* Интерфейсы для результатов запросов - это типа Data Transfer Object, считаю правильным точно знать, что приходит от сервера. Только начал применять, подсмотрел на новом проекте, пока не знаю, какие могут быть подводные камни.

* Раньше не пользовался formBuilder.array. Тут применил для списка авторов - довольно удобно.
* Валидацию форм можно было бы проработать более детально, не хватило времени. + обработка ошибок от сервера.

* Бэкенд эмулируется на node, книги хранятся в db.json. 
* Метод DELETE тоже работает, хотя под него нет кнопок во view.


# FrontendBooks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
