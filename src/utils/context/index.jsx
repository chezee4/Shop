import {createContext, useState} from 'react'

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
      <Context.Provider
        value={{
         burgerActive,
         setBurgerActive
        }}
      >
        {children}
      </Context.Provider>
    );
  };