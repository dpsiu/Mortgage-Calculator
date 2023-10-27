import React, { useState, useEffect } from "react";
import { PieChart } from './PieChart'
import { useSharedContext } from "../src/SharedContext";

export function MortgageSummary () {
    const {sharedData, setSharedData} = useSharedContext()

  return (
    <>
      <PieChart/>
    </>
  );
}