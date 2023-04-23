import { createContext, useState, useContext } from "react";

export const SelectionContext = createContext();

const SelectionContextProvider = ({ children }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const changeSelectedHotel = (key) => {
    setSelectedHotel(key);
  };

  const [selectedFlight, setSelectedFlight] = useState(null);
  const changeSelectedFlight = (key) => {
    setSelectedFlight(key);
  };

  const [selectedObjects, setSelectedObjects] = useState([]);

  const value = {
    selectedHotel,
    setSelectedHotel,
    changeSelectedHotel,
    selectedFlight,
    setSelectedFlight,
    changeSelectedFlight,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);

export default SelectionContextProvider;
