import React from 'react';
import { connect } from 'react-redux';

class SecondComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(SecondComponent);