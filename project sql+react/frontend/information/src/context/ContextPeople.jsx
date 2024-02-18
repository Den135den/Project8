import React, { useState, createContext } from "react";

// Оголошення контексту поза компонентом ContextPeople
const PeopleContext = createContext();

function ContextPeople({ children }) {
  // Використання useState для зберігання стану
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const [increment, setIncrement] = useState(null);
  const [decrement, setDecrement] = useState(1);

  return (
    // Передача значень через контекст
    <PeopleContext.Provider
      value={{
        data,
        setData,
        increment,
        setIncrement,
        decrement,
        originalData, // Додано originalData до значень контексту
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
