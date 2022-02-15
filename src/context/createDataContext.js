import React, { useReducer } from 'react';

//n dd ana reducer na m ig bubutang
// tas m mga function tun na action
//tas an default value
//mala n cya class(may mga parameters)
export default (reducer, actions, defaultVal) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultVal);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
