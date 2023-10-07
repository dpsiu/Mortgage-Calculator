import { set } from "date-fns";
import React, { useState, useEffect } from "react";

export function MortgageCalculatorInput() {
  const [optionalExpensesOpen, setOptionalExpensesOpen] = useState(false);
  const [count, setCount] = useState(0);

  const initialInputState = {
    homeprice: "",
    downpayment: "",
    loanterm: "",
    interestrate: "",
    zipcode: "",
    propertytax: "",
    homeownerinsurance: "",
    pmipermonth: "",
    hoafee: "",
    monthlyPayment: "",
  };

  const calculateMortgage = () => {};

  const [mortgageInputs, setMortgageInputs] = useState(initialInputState);

  const toggleOptionalExpenses = () => {
    setOptionalExpensesOpen(!optionalExpensesOpen);
  };

  useEffect(() => {
    setMortgageInputs({
      ...mortgageInputs,
      monthlyPayment: mortgageInputs.homeprice * 2,
    });
  }, [
    mortgageInputs.homeprice,
    mortgageInputs.downpayment,
    mortgageInputs.loanterm,
    mortgageInputs.interestrate,
    mortgageInputs.zipcode,
    mortgageInputs.propertytax,
    mortgageInputs.homeownerinsurance,
    mortgageInputs.pmipermonth,
    mortgageInputs.hoafee,
    mortgageInputs.monthlyPayment,
  ]);

  const validInputKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleValidInput = (e) => {
    console.log(e.key);
    e.key ===
      [
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)
          ? true
          : e.preventDefault(),
        false,
      ];
  };

  return (
    <>
      <div className="flex flex-col p-4 w-full">
        <div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-bold ">Home Price</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="text"
              value={mortgageInputs.homeprice}
              onKeyPress={(e) => handleValidInput(e)}
              onChange={(e) =>
                setMortgageInputs({
                  ...mortgageInputs,
                  homeprice: e.target.value,
                })
              }
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Down Payment</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.downpayment}
              onKeyPress={(e) => handleValidInput(e)}
              onChange={(e) =>
                setMortgageInputs({
                  ...mortgageInputs,
                  downpayment: e.target.value,
                })
              }
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Loan Term</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.loanterm}
              onKeyPress={(e) => handleValidInput(e)}
              onChange={(e) =>
                setMortgageInputs({
                  ...mortgageInputs,
                  loanterm: e.target.value,
                })
              }
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Interest Rate</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.interestrate}
              onKeyPress={(e) => handleValidInput(e)}
              onChange={(e) =>
                setMortgageInputs({
                  ...mortgageInputs,
                  interestrate: e.target.value,
                })
              }
            />
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">ZIP Code</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.zipcode}
              onKeyPress={(e) => handleValidInput(e)}
              onChange={(e) =>
                setMortgageInputs({
                  ...mortgageInputs,
                  zipcode: e.target.value,
                })
              }
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
            <span className="material-symbols-outlined px-2 hover:no-underline! focus:no-underline! no-underline!">
              expand_more
            </span>
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
                  value={mortgageInputs.propertytax}
                  onKeyPress={(e) => handleValidInput(e)}
                  onChange={(e) =>
                    setMortgageInputs({
                      ...mortgageInputs,
                      propertytax: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  Homeowner's insurance per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                  value={mortgageInputs.homeownerinsurance}
                  onKeyPress={(e) => handleValidInput(e)}
                  onChange={(e) =>
                    setMortgageInputs({
                      ...mortgageInputs,
                      homeownerinsurance: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  PMI per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                  value={mortgageInputs.pmipermonth}
                  onKeyPress={(e) => handleValidInput(e)}
                  onChange={(e) =>
                    setMortgageInputs({
                      ...mortgageInputs,
                      pmipermonth: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pb-4">
                <p className="pb-2 w-full text-sm font-semibold ">
                  HOA fees per month
                </p>
                <input
                  className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                  type="number"
                  value={mortgageInputs.hoafee}
                  onKeyPress={(e) => handleValidInput(e)}
                  onChange={(e) =>
                    setMortgageInputs({
                      ...mortgageInputs,
                      hoafee: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <h3>Total:{mortgageInputs.monthlyPayment}</h3>
        </div>
      </div>
    </>
  );
}
