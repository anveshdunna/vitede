import { createContext, useState, useContext, useEffect } from "react";

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

  const [showHotel, setShowHotel] = useState(false);
  const changeShowHotel = () => {
    setShowHotel(!showHotel);
  };
  const setShowHotelFalse = () => {
    setShowHotel(false);
  };

  const value = {
    selectedHotel,
    setSelectedHotel,
    changeSelectedHotel,
    selectedFlight,
    setSelectedFlight,
    changeSelectedFlight,
    showHotel,
    setShowHotel,
    changeShowHotel,
    setShowHotelFalse,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);

export default SelectionContextProvider;
