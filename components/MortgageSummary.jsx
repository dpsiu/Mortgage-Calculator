import React, { useState, useEffect } from "react";
import { PieChart } from "./PieChart";
import { useSharedContext } from "../src/SharedContext";

export function MortgageSummary() {
  const { sharedData, setSharedData } = useSharedContext();

  console.log(sharedData);
  return (
    <>
      <div className="md:max-w-xl">
        <PieChart />
        <div className="relative flex items-center text-lg font-bold my-4">
          <h3>
            Total monthly payment = <span>$ </span>
            {sharedData.monthlyPayment}
          </h3>
        </div>
      </div>
    </>
  );
}
