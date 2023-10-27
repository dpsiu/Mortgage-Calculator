import { useState } from "react";
import { MortgageCalculatorInput } from "../components/MortgageCalculatorInput"
import { MortgageSummary } from "../components/MortgageSummary";
import { PieChart } from "../components/PieChart";
import { SharedContextProvider } from "./SharedContext";
import "./App.css";

function App() {

  return (
    <>
      <SharedContextProvider>
        <div className="flex flex-col justify-center items-center p-4 mx-auto">
          <h1 className="w-full text-3xl text-left pt-6 pb-2 px-2">Mortgage Calculator</h1>
          <MortgageCalculatorInput/>
          <MortgageSummary/>
          <PieChart/>
        </div>
      </SharedContextProvider>
    </>
  );
}

export default App;