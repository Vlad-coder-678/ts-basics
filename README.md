# TS Core

В этой теме вы познакомитесь с [typescript][typescript]

## Подготовка окружения

1. Установка [node.js][node.js] и [npm](https://www.npmjs.com/)
    1. Переходим на [node.js][node.js]
    2. Устанавливаем "Recommended For Most Users" версию
    3. Откроем консоль и выполним команды:

        ```js
        node -v
        ```

        ```js
        npm -v
        ```

        Если команды отработали правильно, то вы увидите версии node.js и npm соответственно
2. Создание package.json
    1. Выполните команду

        ```js
            npm init
        ```

    2. При создании укажите название пакета (package name) и точку входа (entry point), остальные поля оставьте по умолчанию

3. Установите [typescript][typescript]
    1. Выполните команду:

        ```js
        npm install typescript --save-dev
        ```

    2. Создайте файл tsconfig.json

        ```js
        tsc init
        ```

    3. Раскомментируйте секцию: __/* Type Checking */__
    4. Раскомментируйте __noEmitOnError__

## Использовние

Теперь вы можете запустить компилятор TypeScript с помощью этой команды:

```js
npx tsc
```

## Полезные ссылки

- [typescript][typescript]
- [Подробное видео про typescript](https://www.youtube.com/watch?v=7NU6K4170As&list=PLqKQF2ojwm3nW-cQeSER79xdpK3vL5c-g)

<!-- ссылки -->

[typescript]: https://www.typescriptlang.org/
[node.js]: https://nodejs.org/en
