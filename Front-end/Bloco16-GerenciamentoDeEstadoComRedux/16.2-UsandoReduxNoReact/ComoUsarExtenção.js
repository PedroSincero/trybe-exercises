// Utilização do DevTools 

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Versão atualizada 

const extension = window.devToolsExtension() || ((f) => f);

// Adicione ao Store dentro dos parametros de compose-function
// Ex: 

const store = createStore(rootReducer, compose(extension));