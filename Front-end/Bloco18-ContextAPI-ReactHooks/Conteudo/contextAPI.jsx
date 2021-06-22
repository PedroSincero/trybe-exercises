// 1 - Context API fornece um meio de passar dados através da árvore de componentes sem a necessidade de passar props manualmente em cada nível. Para criar um contexto, utiliza-se o método createContext do React 

import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);

// OBS  - createContext retorna um objeto que possui dois componentes como propriedades: Provider e Consumer . O valor passado como parâmetro para createContext será utilizado como o valor padrão do contexto, caso nenhum valor seja especificado ao utilizar o Provider .

// 2 - Provider é responsável por "prover" os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ele aceita uma prop obrigatória value com os dados que serão compartilhados. Esse valor pode ser qualquer valor JavaScript, como um número, string, array ou objeto.

<MyContext.Provider value={/* algum valor compartilhado */}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>

{/* 
  3 - Consumer é utilizado sempre que um componente precisa "consumir" o valor do contexto.

*/}

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}

{/* 
  4 - Via de regra, o contexto é utilizado em vários arquivos diferentes, seja como provider, seja como consumer. Assim, é usual criá-lo e exportá-lo em arquivo separado e importá-lo sempre que for necessário.
*/}

{/* MyContext.js */}

import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;

{/* MyComponent.js */}

import React from 'react';

import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value={123}>
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;

{/* MyOtherComponent.js */}

import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <Something />
      )}
    </MyContext.Consumer>
  )
}

export default MyOtherComponent;
