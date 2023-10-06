import { useState } from "react";
import { MortgageCalculatorInput } from "../components/MortgageCalculatorInput"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 mx-auto">
        <h1 className="w-full text-3xl text-left pt-6 pb-2 px-2">Mortgage Calculator</h1>
        <MortgageCalculatorInput/>
      </div>
    </>
  );
}

export default App;
