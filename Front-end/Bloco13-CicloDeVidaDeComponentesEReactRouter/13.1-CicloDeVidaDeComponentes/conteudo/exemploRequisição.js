// Exemplo de Chamada de API no React
// criando o fetch & adicionando um estado novo, colocando dentro dele o request da API
async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json'} }
    const requestReturn = await fetch('https://icanhazdadjoke.com/')
    const requestObject = await requestReturn.json()
    this.setState({
        jokeObj: requestObject
    })
}
// chamamos a API dentro do DidMount 
componentDidMount() {
    this.fetchJoke()
}