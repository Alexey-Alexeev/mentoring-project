# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### Домашнее задание
Почитать по JWT
cookies
CORS
REST
понять разницу между GET, POST, PUT, DELETE

ПРАКТИКА
вынести в одно место проброс заголовков с JWT
можно сделать с помощью axios

Практика
Добавить тэги. При вводе сделать 3ью строку: "Введите тэги".
В таблице появится новая колонка: Тэги.
Тэги - это массив строк.
Поиск по тэгам. Они улетают через GET. И прописываются в query parameter через запятую
Добавить поисковую строку. И в поисковой строке вводим тэги через запятую и будет кнопка Search.
Сделать новые компоненты: для поиска по тэгам

На будущее: кнопки редактирования и удаления должны быть только у автора
Разделение question на мои и НЕ мои.

1) (вероятно при создании нужно завести поле: кем создано)
есть отдельная страница где выводятся все вопросы подряд
и есть отдельаня страница где выводятся пользовательские вопросы
на странцие где выводятся только его запросы он может их редактировать и удалять

2)
в самом начале работы приложения заглядываем внутрь localstorage , кладем в ReduxState
и далее проверяем авторизацию в ReduxState

3) navigation
   // необходимо понимать на какой странице мы сейчас находимся,
   // чтобы подсвечивать эту страницу как текущую
   // скорее всего в объекте navigation есть текущая локация:
   // current.path
   опираться на React.store , а не на jwt

4) фронт для введите userName

5) отрефакторить код от комментариев и неспользуемых



