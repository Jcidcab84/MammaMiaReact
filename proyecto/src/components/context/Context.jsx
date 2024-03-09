import React, { createContext, useState, useContext } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  const selectPizza = (pizza) => {
    setSelectedPizzas([...selectedPizzas, pizza]);
  };

  const unselectPizza = (pizzaId) => {
    setSelectedPizzas(selectedPizzas.filter(pizza => pizza.id !== pizzaId));
  };

  return (
    <PizzaContext.Provider value={{ selectedPizzas, selectPizza, unselectPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizza debe ser utilizado dentro de un PizzaProvider');
  }
  return context;
};
