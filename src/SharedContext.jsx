import { useContext, createContext, useState } from "react";

export const SharedContext = createContext();

export function useSharedContext() {
  return useContext(SharedContext);
}

export function SharedContextProvider({ children }) {
  const [sharedData, setSharedData] = useState({});

  return (
    <SharedContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </SharedContext.Provider>
  );
}