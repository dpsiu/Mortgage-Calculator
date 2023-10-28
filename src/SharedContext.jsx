import { useContext, createContext, useState } from "react";

export const SharedContext = createContext();

export function useSharedContext() {
  return useContext(SharedContext);
}

export function SharedContextProvider({ children }) {
  const initialInputState = {
    homeprice: 425000,
    downpayment: 85000,
    loanterm: 30,
    interestrate: 7.98,
    zipcode: 78701,
    propertytax: 280,
    homeownerinsurance: 66,
    pmipermonth: 0,
    hoafee: 0,
    monthlyPayment: 0,
  };

  const [sharedData, setSharedData] = useState(initialInputState);

  return (
    <SharedContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </SharedContext.Provider>
  );
}