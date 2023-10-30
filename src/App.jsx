import { useState } from "react";
import { MortgageCalculatorInput } from "../components/MortgageCalculatorInput";
import { MortgageSummary } from "../components/MortgageSummary";
import { PieChart } from "../components/PieChart";
import { SharedContextProvider } from "./SharedContext";
import "./App.css";

function App() {
  return (
    <>
      <SharedContextProvider>
        <div className="flex flex-col justify-center items-center p-4 mx-auto md:max-w-7xl">
          <h1 className="w-full text-3xl text-left pt-6 pb-2">
            Mortgage Calculator
          </h1>
          <div
            className="flex flex-col justify-around items-center md:items-start pt-6 gap-5 md:flex-row md:px-2 md:max-w-7xl w-full h-full shadow-lg "
          >
            <div className="w-full md:max-w-sm md:min-w-max">
              <MortgageCalculatorInput />
            </div>
            <div className="chart-container relative ">
              <MortgageSummary />
            </div>
          </div>
        </div>
      </SharedContextProvider>
    </>
  );
}

export default App;
