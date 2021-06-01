// isso é uma boa pratica : 
export const NEW_ACTION = 'NEW_ACTION';


export const newAction = (state) => ({ type: NEW_ACTION, state });

// Como dito anterioremente, nossa action , por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente. Note que, no caso abaixo, criamos também uma key state , que guardará o valor recebido pela action.

