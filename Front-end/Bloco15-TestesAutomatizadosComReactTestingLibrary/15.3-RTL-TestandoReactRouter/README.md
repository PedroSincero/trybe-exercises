# RTL - Testando React Router

Biblioteca History: https://reactrouter.com/web/api/history

Codigo de Exemplo, Praticar: https://testing-library.com/docs/example-react-router/#reducing-boilerplate

* Primeiro, utilize o create-react-app com o nome que desejar.
* Depois disso, vamos instalar as dependências que utilizaremos nesse projeto, a react-router-dom , history e a @testing-library/react , com o comando abaixo.

```
- npm i react-router-dom
```

* Por último vamos copiar esse código para dentro do nosso arquivo App.js apagando tudo o que já estiver lá.

```
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
```