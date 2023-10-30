import React, { useState, useEffect } from "react";
import { PieChart } from "./PieChart";
import { useSharedContext } from "../src/SharedContext";

export function MortgageSummary() {
  const { sharedData, setSharedData } = useSharedContext();

  console.log(sharedData);
  return (
    <>
      <div className="flex flex-col ">
        <div className="chart-container relative h-100vh w-100vw">
          <PieChart id="chart" />
        </div>
        <h3 className="relative flex items-center text-lg font-bold my-4 md:max-w-xl ">
          Total monthly payment = <span>$ </span>
          {sharedData.monthlyPayment}
        </h3>
      </div>
    </>
  );
}
