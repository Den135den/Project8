import React, { useState, createContext } from "react";


const PeopleContext = createContext();

function ContextPeople({ children }) {
 
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const [increment, setIncrement] = useState(null);
  const [decrement, setDecrement] = useState(1);

  return (
   
    <PeopleContext.Provider
      value={{
        data,
        setData,
        increment,
        setIncrement,
        decrement,
        originalData, 
        setOriginalData,
        setDecrement,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}

// Експорт контексту та компоненту
export { PeopleContext, ContextPeople };
