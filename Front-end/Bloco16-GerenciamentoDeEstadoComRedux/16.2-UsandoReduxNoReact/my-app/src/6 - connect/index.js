import React from 'react';
// 1 - importar o connect
import { connect } from 'react-redux';
// 1 - importar o index do action
import { newAction } from './actions';

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anyState: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ anyState: event.target.value })}
        />
        <button onClick={() => this.props.myFirstDispatch(this.state.anyState)}>
          Executar qualquer tarefa
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  myFirstDispatch: state => dispatch(newAction(state))});
 
// connect
// 1 - faz um export default, 2 - chama o connect, 3 - em seguida adicione as propriedades, caso tenha map adicione o map ou dispatch, 4 - logo em seguida adicione o nome do componente que está sendo feito o connect
export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent);
// O método connect possui a seguinte estrutura: connect()() . É ele quem nos da acesso ao store do Redux.

// No primeiro parênteses, devem estar presentes os métodos nativos do Redux. No caso de utilizar somente o mapDispatchToProps , o primeiro parâmetro desse parênteses deverá ser null , já no caso de utilizar somente o mapStateToProps , que veremos logo a frente, o segundo parâmetro desse parênteses deverá ser null .


// No segundo parênteses, colocamos o componente que deverá ser conectado.