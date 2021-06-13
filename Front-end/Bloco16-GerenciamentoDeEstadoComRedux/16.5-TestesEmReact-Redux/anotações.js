// renderWithRedux
// A função renderWithRedux recebe um componente como primeiro parâmetro e desconstrói um objeto como o segundo. Ele obtém o valor de uma chave initialState desse objeto e o armazena em uma variável com o mesmo nome. Além disso, ele atribui um valor padrão para a chave store , e esse valor é uma nova store criada com um reducer importado e o initialState que você acabou de desconstruir. 

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}