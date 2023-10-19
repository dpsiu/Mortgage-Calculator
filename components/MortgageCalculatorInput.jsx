import { set } from "date-fns";
import React, { useState, useEffect } from "react";

export function MortgageCalculatorInput() {
  const [optionalExpensesOpen, setOptionalExpensesOpen] = useState(false);

  // const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState("")

  const initialInputState = {
    homeprice: 425000,
    downpayment: 85000,
    loanterm: "30",
    interestrate: "7.98",
    zipcode: "78701",
    propertytax: "",
    homeownerinsurance: "",
    pmipermonth: "",
    hoafee: "",
    monthlyPayment: "",
  };

  const [mortgageInputs, setMortgageInputs] = useState(initialInputState);

  const toggleOptionalExpenses = () => {
    setOptionalExpensesOpen(!optionalExpensesOpen);
  };

  // P = Monthly mortgage payment
  // L = Mortgage loan amount
  // C = Your mortgage interest rate
  // N = Number of monthly payments over
  const L =
    mortgageInputs.homepri -
    mortgageInputs.downpayment;
  const C = mortgageInputs.interestrate / 12 / 100;
  const N = mortgageInputs.loanterm * 12;
  const P = ((L * (C * (1 + C) ** N)) / ((1 + C) ** N - 1))
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    setMortgageInputs({
      ...mortgageInputs,
      monthlyPayment: P,
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

  // Handles input case, permitting only nums.
  // Might use switch case to handle diff input fields,
  // ie, interest rate which allows a single decimal


  // const handleValidKey = (e, field, value) => {
  //   const key = e.key;
  //   const interestRegex = /^[0-9]{1,5}(?:\.[0-9]{0,3})?$/;

  //   if (field === "interestrate") {
  //     console.log("interest!")
  //     setIsValid(key >= "0" && key <= "9") || key === "Backspace" || key === ".";
  //     if (value.includes(".")) {
  //       console.log('interest, but no .')
  //       setIsValid(key >= "0" && key <= "9") || key === "Backspace";
  //     }
  //   } else {
  //     console.log('not interest')
  //     setIsValid(key >= "0" && key <= "9") || key === "Backspace";
  //   }

  //   const numberValue = parseFloat(value)

  //   if (interestRegex.test(value) && numberValue < 100) {
  //     setIsValid(true)
  //     console.log("Good");
  //   } else if (key === "Backspace") {
  //     setIsValid(true)
  //     console.log("Good (Backspace)");
  //   } else if (value === "") {
  //     setIsValid(true)
  //   } else {
  //     setIsValid(false)
  //     console.log("Bad");
  //   }

  //   if (!isValid) {
  //     e.preventDefault();
  //   }
  // };
  
  // Below is savestate 1, inputs only accept numbers
  const handleValidKey = (e) => {
    const keyAscii = e.key.charCodeAt(0) || e.which;
    const isValid = (keyAscii >= 48 && keyAscii <= 57) || keyAscii === 66 || keyAscii === 8;

    if (!isValid) {
      e.preventDefault();
    }
  }

    // Next, make error state for home price. Must be > 10000
  const handleValidHomeprice = (e) => {
    const homeprice = mortgageInputs.homeprice
    console.log('Homeprice:' +  homeprice)

    homeprice > 10000 ? console.log('true') : console.log('false')
  }

  const handleValidDownPayment = (e) => {
    const homeprice = mortgageInputs.homeprice
    const downpayment = mortgageInputs.downpayment

    homeprice > downpayment ? console.log('All good') : console.log('down p cant b bigger than house price')
  }

  // .replace() removes commas before calculation for P.
  // Consider refactor. Rather than change state with comma and remove b4 calc,
  // consider keeping state as num, and commas only for input display
  const formatNumberWithCommas = (value) => {
    const stringValue = value.toLocaleString()
    return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="flex flex-col p-4 w-full">
        <div>
          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-bold">Home Price</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                $
              </span>
              <input
                className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                type="text"
                value={formatNumberWithCommas(mortgageInputs.homeprice)}
                onKeyUp={(e) => {handleValidKey(e);
                  handleValidHomeprice();
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  const numericValue = parseFloat(value.replace(/,/g, ""))
                  setMortgageInputs({
                    ...mortgageInputs,
                    homeprice: numericValue,
                  });
                }}
              />
            </div>
          </div>
          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-semibold ">Down Payment</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                $
              </span>
              <input
                className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                type="text"
                value={formatNumberWithCommas(mortgageInputs.downpayment)}
                onKeyUp={(e) => {
                  handleValidKey(e);
                  handleValidDownPayment()
                }}
                onChange={(e) => {
                  const value = e.target.value.replace(/,/g, "");
                  const numericValue = parseFloat(value)
                  setMortgageInputs({
                    ...mortgageInputs,
                    downpayment: numericValue,
                  });
                }}
              />
            </div>
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Loan Term</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.loanterm}
              onKeyDown={(e) => {
                handleValidKey(e);
              }}
              onChange={(e) => {
                setMortgageInputs({
                  ...mortgageInputs,
                  loanterm: e.target.value,
                });
              }}
            />
          </div>
          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-bold">Interest Rate</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 right-0 pr-2 flex items-center">
                %
              </span>
              <input
                // className={`py-2 px-2 border  rounded-md 
                //  focus:outline-none w-full appearance-none ${
                //    isValid ? "border-zinc-500 hover:bg-blue-100/50 focus:border-blue-700" : "border-red-500 bg-red-100/50"
                //  }`}
                type="text"
                id="interestrate"
                value={mortgageInputs.interestrate}
                // onKeyPress={(e) => {
                //   handleValidKey(e, "interestrate", e.target.value);
                // }}
                onKeyDown={(e) => {
                  handleValidKey(e);
                }}
                onChange={(e) => {
                  const value = e.target.value.replace(/./g, "");
                  setMortgageInputs({
                    ...mortgageInputs,
                    interestrate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">ZIP Code</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={mortgageInputs.zipcode}
              onKeyDown={(e) => {
                handleValidKey(e);
              }}
              onChange={(e) => {
                setMortgageInputs({
                  ...mortgageInputs,
                  zipcode: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              toggleOptionalExpenses(); 
            }}
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
                  onKeyDown={(e) => {
                    handleValidKey(e);
                  }}
                  onChange={(e) => {
                    setMortgageInputs({
                      ...mortgageInputs,
                      propertytax: e.target.value,
                    });
                  }}
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
                  onKeyDown={(e) => {
                    handleValidKey(e);
                  }}
                  onChange={(e) => {
                    setMortgageInputs({
                      ...mortgageInputs,
                      homeownerinsurance: e.target.value,
                    });
                  }}
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
                  onKeyDown={(e) => {
                    handleValidKey(e);
                  }}
                  onChange={(e) => {
                    setMortgageInputs({
                      ...mortgageInputs,
                      pmipermonth: e.target.value,
                    });
                  }}
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
                  onKeyDown={(e) => {
                    handleValidKey(e);
                  }}
                  onChange={(e) => {
                    setMortgageInputs({
                      ...mortgageInputs,
                      hoafee: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="relative flex items-center text-lg font-bold">
          <h3>
            Total monthly payment = <span>$ </span>
            {mortgageInputs.monthlyPayment}
          </h3>
        </div>
      </div>
    </>
  );
}