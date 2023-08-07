import {createContext, useState} from 'react'

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [burgerActive, setBurgerActive] = useState(false);
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);

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