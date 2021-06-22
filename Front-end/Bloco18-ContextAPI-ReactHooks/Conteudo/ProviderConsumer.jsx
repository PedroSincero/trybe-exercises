// INFO - Quando se utiliza um consumer , React encontrará na árvore o provider correspondente mais próximo e utilizará seu valor. Caso não seja encontrado um provider , o valor do contexto utilizado será o valor passado para createContext quando o contexto foi criado.

const MyContext = createContext(1);

// INFO - Se colocamos um provider na árvore e passamos para ele 1000000 como valor, este será o valor recebido quando utilizamos um consumer .

<MyContext.Provider value={1000000}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => { /* value = 1000000 */
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}

{/* INFO - Porém, se não colocarmos o Provider na árvore, quando um componente acessar o contexto através de consumer , o valor recebido será 1.
 */}

/* Não existe mais o Provider nessa árvore */
<MyComponent>
  <MyOtherComponent>
    ...
  </MyOtherComponent>
<MyComponent>

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => { /* value = 1 */
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}
