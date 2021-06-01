import React from 'react';
import { connect } from 'react-redux';
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

export default connect(null, mapDispatchToProps)(FirstComponent);