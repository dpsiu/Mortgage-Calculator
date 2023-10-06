import { set } from "date-fns";
import React, { useState } from "react";

export function MortgageCalculatorInput() {
  const [optionalExpensesOpen, setOptionalExpensesOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleOptionalExpenses = () => {
    setOptionalExpensesOpen(!optionalExpensesOpen);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div className="flex flex-col p-4 w-full">
        <div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-bold ">Home Price</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Down Payment</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Loan Term</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Interest Rate</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">ZIP Code</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
            />
          </div>
        </div>
        <div>
          <button
            onClick={toggleOptionalExpenses}
            type="button"
            className="inline-flex items-center w-full py-2 my-4 text-blue-700 font-bold focus:outline-none hover:underline"
            id="options-menu"
          >
            Optional: Taxes, Insurance, HOA
            {/* Dropdown arrow */}
            <span className="material-symbols-outlined px-2 hover:no-underline! focus:no-underline! no-underline!">expand_more</span>
          </button>
          {optionalExpensesOpen && (
            <div className="pt-4">
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  Property tax per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  Homeowner's insurance per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  PMI per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  HOA fees per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
