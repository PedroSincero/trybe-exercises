import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;

// o combineReducers combina reducers já criado. 

// O método combineReducers que, como diz seu nome, combina reducers , deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.

// no exemplo abaixo é referente a distruibuição de varios reducers e fazendo a combinação

import { combineReducers } from 'redux';
import Africa from './Africa';
import America from './America';
import Antarctica from './Antarctica';
import Asia from './Asia';
import Europe from './Europe';
import Oceania from './Oceania';

const rootReducer = combineReducers(
  { Africa, America, Antarctica, Asia, Europe, Oceania },
);

// export default rootReducer;
