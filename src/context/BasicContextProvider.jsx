import { createContext, useContext, useState } from "react";

const BasicContext = createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState(null); // Replace with your initial state

  return (
    <BasicContext.Provider value={{ location, setLocation }}>
      {children}
    </BasicContext.Provider>
  );
};

export const useBasicContext = () => useContext(BasicContext);
