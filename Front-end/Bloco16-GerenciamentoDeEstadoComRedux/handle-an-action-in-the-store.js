const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN') {
  // Change code above this line
  return {login: true}
  }else {
    return {login: false }
  }
  

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
