import { createContext, useContext, useEffect, useState } from "react";
import data from "../api/api";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  function createItem(item) {
    setItems((prevItems) => [item, ...prevItems]); // Actualiza el estado directamente
    console.log("New book added:", item);
  }

  function getItem(id) {
    return items.find((item) => item.id === id);
  }

  function updateItem(item) {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? item : i))
    );
    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}