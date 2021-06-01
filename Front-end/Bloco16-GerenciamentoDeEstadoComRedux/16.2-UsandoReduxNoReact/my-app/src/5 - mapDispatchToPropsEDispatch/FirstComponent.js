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
// 2 - chamar o mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  myFirstDispatch: state => dispatch(newAction(state))});
// 3 - chamar o connect adicionando o mapdispatch no segundo parametro
export default connect(null, mapDispatchToProps)(FirstComponent);