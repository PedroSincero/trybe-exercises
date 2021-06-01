// O método connect possui a seguinte estrutura: connect()() . É ele quem nos da acesso ao store do Redux.

// No primeiro parênteses, devem estar presentes os métodos nativos do Redux. No caso de utilizar somente o mapDispatchToProps , o primeiro parâmetro desse parênteses deverá ser null , já no caso de utilizar somente o mapStateToProps , que veremos logo a frente, o segundo parâmetro desse parênteses deverá ser null .

export default connect(mapStateToProps, mapDispatchToProps)(Component)
// No segundo parênteses, colocamos o componente que deverá ser conectado.