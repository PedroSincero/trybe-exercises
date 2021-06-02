const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type) {
  // Change code above this line
  case 'LOGIN':
  return {
    authenticated: true
  }
  case 'LOGOUT':
  return {
    authenticated: false
  }
  default:
    return defaultState
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};