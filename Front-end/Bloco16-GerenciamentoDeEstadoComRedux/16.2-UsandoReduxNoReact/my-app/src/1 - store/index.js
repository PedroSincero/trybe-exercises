// Vamos passar pelas peças de uma configuração básica react-redux e começaremos pela store . Não se preocupe em testar os códigos nesse momento e sim em absorver como as peças funcionam em conjunto, você terá muitas oportunidades de praticar essa configuração com os exercícios do repositório que você clonou no inicio da aula de hoje .

import { createStore, combineReducers, compose } from 'redux';
import rootReducer from '../2 - reducers';

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(extension));

export default store;

// Versão Mais Atualizada >  
// const extension = window.devToolsExtension() || ((f) => f);