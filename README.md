# REACT CRUD APP

![Slide 16_9 - 1fastapi-mongodb](https://user-images.githubusercontent.com/16520789/149645021-0af44547-9dce-452a-9189-a4421c783a7f.png)


```
yarn init -y
```
Setup React
```
yarn add react react-dom react-scripts
```
Setup React Saga
```
yarn add @reduxjs/toolkit react-redux redux-saga
```

```
mkdir src public
```

```
touch src/index.js public/index.html
```

src/index.js
```js
import ReactDOM from 'react-dom'
ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'))
```
public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="div"></div>
</body>
</html>
```
package.json
```json
  "scripts": {
    "start":"react-scripts start"
  },
```
Start server

```
yarn start 
Y
```

App.js
```js
const App = () => {
    return <h1>Hello App</h1>
}
export default App
```

```
mkdir -p src/redux/{slice,sagas} src/components
```

```
touch src/redux/slice/{user,users}.js
```

```
touch src/components/{MyForm,MyTable}.js
```

Staet JSON Server
```
npm i -g json-server
json-server --version
json-server --watch public/rest.json --port 8000
```
Install material UI
```
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material

```
Add Links to public/index.html
```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
Add axios
```
yarn add axios
mkdir -p src/api
touch src/api/users.js
```
