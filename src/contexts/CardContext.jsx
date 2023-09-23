import { createContext, useContext, useState } from "react";

export const CardContext = createContext();
export const CardContextProvider = ({ children }) => {
  const [name, setName] = useState("Card name");
  const [holdername, setHolderName] = useState("Cardholder name");
  const [amount, setAmount] = useState(null);
  const [physical, setPhysical] = useState(null);

  const value = {
    name,
    holdername,
    amount,
    physical,
    setName,
    setHolderName,
    setAmount,
    setPhysical,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCard = () => useContext(CardContext);

export default CardContextProvider;
