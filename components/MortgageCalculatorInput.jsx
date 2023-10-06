import React, { useState } from 'react'

export function MortgageCalculatorInput() {
  return (
    <>
      <div className="flex flex-col p-4 w-full">
        <div className="pb-4">
          <p className="pb-2 w-full">Home Price</p>
          <input
            className="py-2 px-2 border-2 border-zinc-500 rounded-md hover:bg-blue-100 focus:border-blue-500 focus:outline-none w-full appearance-none"
            type="number"
          />
        </div>
        <div className="pb-4">
          <p className="pb-2 w-full">Down Payment</p>
          <input
            className="py-2 px-2 border-2 border-zinc-500 rounded-md hover:bg-blue-100 focus:border-blue-500 focus:outline-none w-full appearance-none"
            type="number"
          />
        </div>
        <div className="pb-4">
          <p className="pb-2 w-full">Loan Term</p>
          <input
            className="py-2 px-2 border-2 border-zinc-500 rounded-md hover:bg-blue-100 focus:border-blue-500 focus:outline-none w-full appearance-none"
            type="number"
          />
        </div>
        <div className="pb-4">
          <p className="pb-2 w-full">Interest Rate</p>
          <input
            className="py-2 px-2 border-2 border-zinc-500 rounded-md hover:bg-blue-100 focus:border-blue-500 focus:outline-none w-full appearance-none"
            type="number"
          />
        </div>
        <div className="pb-4">
          <p className="pb-2 w-full">ZIP Code</p>
          <input
            className="py-2 px-2 border-2 border-zinc-500 rounded-md hover:bg-blue-100 focus:border-blue-500 focus:outline-none w-full appearance-none"
            type="number"
          />
        </div>
      </div>
    </>
  );
}
