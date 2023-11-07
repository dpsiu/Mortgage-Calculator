import React, { useState, useEffect } from "react";
import { useSharedContext } from "../src/SharedContext";

export function MortgageCalculatorInput() {
  const [optionalExpensesOpen, setOptionalExpensesOpen] = useState(false);

  const initialInputState = {
    homeprice: 425000,
    downpayment: 85000,
    loanterm: 30,
    interestrate: 7.98,
    zipcode: 78701,
    propertytax: 280,
    homeownerinsurance: 66,
    pmipermonth: 0,
    hoafee: 0,
    monthlyPayment: 0,
  };

  const { sharedData, setSharedData } = useSharedContext();

  // L = Mortgage loan amount
  // C = Your mortgage interest rate
  // N = Number of monthly payments over
  // P = Monthly mortgage payment

  const L = sharedData.homeprice - sharedData.downpayment;
  const C = sharedData.interestrate / 12 / 100;
  const N = sharedData.loanterm * 12;
  const PropTax = sharedData.propertytax;
  const HOAI = sharedData.homeownerinsurance;
  const PMI = sharedData.pmipermonth;
  const HOAFee = sharedData.hoafee;
  const OptionalExpenses = PropTax + HOAI + PMI + HOAFee;

  const P = (L * ((C * (1 + C) ** N) / ((1 + C) ** N - 1)) + OptionalExpenses)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    setSharedData({
      ...sharedData,
      monthlyPayment: P.replace(/,/g, ""),
    });
  }, [
    sharedData.homeprice,
    sharedData.downpayment,
    sharedData.loanterm,
    sharedData.interestrate,
    sharedData.zipcode,
    sharedData.propertytax,
    sharedData.homeownerinsurance,
    sharedData.pmipermonth,
    sharedData.hoafee,
    sharedData.monthlyPayment,
  ]);

  const handleValidKey = (e) => {
    const keyAscii = e.key.charCodeAt(0) || e.which;
    const value = e.target.value;
    let isValid =
      (keyAscii >= 46 && keyAscii <= 57) || keyAscii === 8 || keyAscii === 66;

    if (!isValid) {
      e.preventDefault();
    }
  };

  const handleValidInput = (e, field) => {
    const value = e.target.value;
    const numericValue = parseFloat(value.replace(/,/g, ""));
    const newValue = isNaN(numericValue) ? 0 : numericValue;

    setSharedData({
      ...sharedData,
      [field]: newValue,
    });
  };

  const handleValidHomeprice = (e) => {
    const homeprice = sharedData.homeprice;
    const downpayment = sharedData.downpayment;
    return homeprice > 10000 && homeprice >= downpayment;
  };

  const handleValidDownPayment = (e) => {
    const homeprice = sharedData.homeprice;
    const downpayment = sharedData.downpayment;
    return downpayment < homeprice;
  };

  const handleValidInterestRate = (e) => {
    const interest = sharedData.interestrate;
    return interest < 100;
  };

  const handleValidLoanTerm = (e) => {
    const loanTerm = sharedData.loanterm;
    return loanTerm <= 30;
  };

  // formatNumWCommas is primarily for display. Consider refactor to
  //  keep actual state as numbers
  const formatNumberWithCommas = (value) => {
    const stringValue = value.toLocaleString();
    return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleOptionalExpenses = () => {
    setOptionalExpensesOpen(!optionalExpensesOpen);
  };

  return (
    <>
      <div className="flex flex-col p-2 w-full">
        <div>
          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-bold">Home Price</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                $
              </span>
              <input
                className={`py-2 px-5 border rounded-md focus:outline-none w-full appearance-none ${
                  handleValidHomeprice()
                    ? "border-zinc-500 hover:bg-blue-100/50 focus:border-blue-700"
                    : "border-red-500 bg-red-100/50"
                }`}
                type="text"
                value={formatNumberWithCommas(sharedData.homeprice)}
                onKeyUp={(e) => {
                  handleValidKey(e);
                  handleValidHomeprice();
                }}
                onChange={(e) => {
                  handleValidInput(e, "homeprice");
                }}
              />
            </div>
            {!handleValidHomeprice() && (
              <p className="text-sm px-3 pt-2 text-red-500">
                Home price must be greater than $10,000 and Down Payment
              </p>
            )}
          </div>
          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-semibold ">Down Payment</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                $
              </span>
              <input
                className={`py-2 px-5 border rounded-md focus:outline-none w-full appearance-none ${
                  handleValidDownPayment()
                    ? "border-zinc-500 hover:bg-blue-100/50 focus:border-blue-700"
                    : "border-red-500 bg-red-100/50"
                }`}
                type="text"
                value={formatNumberWithCommas(sharedData.downpayment)}
                onKeyUp={(e) => {
                  handleValidKey(e);
                  handleValidDownPayment();
                }}
                onChange={(e) => {
                  handleValidInput(e, "downpayment");
                }}
              />
            </div>
            {!handleValidDownPayment() && (
              <p className="text-sm px-3 pt-2 text-red-500">
                Down payment should be less than home price
              </p>
            )}
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">Loan Term</p>
            <input
              className={`py-2 px-2 border  rounded-md
                focus:outline-none w-full appearance-none ${
                  handleValidLoanTerm()
                    ? "border-zinc-500 hover:bg-blue-100/50 focus:border-blue-700"
                    : "border-red-500 bg-red-100/50"
                }`}
              type="number"
              value={sharedData.loanterm}
              onKeyUp={(e) => {
                handleValidKey(e);
                handleValidLoanTerm();
              }}
              onChange={(e) => {
                handleValidInput(e, "loanterm");
              }}
            />
            {!handleValidLoanTerm() && (
              <p className="text-sm px-3 pt-2 text-red-500">
                Loan term should be less than 30 years
              </p>
            )}
          </div>

          <div className="pb-4 relative flex flex-col">
            <p className="pb-2 w-full text-sm font-bold">Interest Rate</p>
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 right-0 pr-2 flex items-center">
                %
              </span>
              <input
                className={`py-2 px-2 border  rounded-md
                 focus:outline-none w-full appearance-none ${
                   handleValidInterestRate()
                     ? "border-zinc-500 hover:bg-blue-100/50 focus:border-blue-700"
                     : "border-red-500 bg-red-100/50"
                 }`}
                type="number"
                value={sharedData.interestrate}
                onChange={(e) => {
                  handleValidInterestRate();
                  handleValidInput(e, "interestrate");
                }}
                // For l8r consideration, interest rate as type num allows 0
                // User backspaces to 0, then inputs num, first char is 0
                // How might we solve?
              />
            </div>
            {!handleValidInterestRate() && (
              <p className="text-sm px-3 pt-2 text-red-500">
                Intererest rate should be less than 100%
              </p>
            )}
          </div>
          <div className="pb-4">
            <p className="pb-2 w-full text-sm font-semibold ">ZIP Code</p>
            <input
              className="py-2 px-2 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
              type="number"
              value={sharedData.zipcode}
              onKeyUp={(e) => {
                handleValidKey(e);
              }}
              onChange={(e) => {
                handleValidInput(e, "zipcode");
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
            className="inline-flex items-center w-full py-2 my-4 text-blue-700 font-bold focus:outline-none no-underline"
            id="options-menu"
          >
            Optional: Taxes, Insurance, HOA
            {/* Dropdown arrow */}
            {/* <span className="material-symbols-outlined px-2 hover:no-underline! focus:no-underline! no-underline!">
              expand_more
            </span> */}
            <span className={`material-symbols-outlined px-2 ${optionalExpensesOpen ? "rotate-180" : ''}`}>
              expand_more
            </span>
          </button>
          {optionalExpensesOpen && (
            <div className="pt-4">
              <div className="pb-4 relative flex flex-col">
                <p className="pb-2 w-full text-sm font-bold">
                  Property tax per month
                </p>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    $
                  </span>
                  <input
                    className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                    type="text"
                    value={formatNumberWithCommas(sharedData.propertytax)}
                    onKeyUp={(e) => {
                      handleValidKey(e);
                    }}
                    onChange={(e) => {
                      handleValidInput(e, "propertytax");
                    }}
                  />
                </div>
              </div>
              <div className="pb-4 relative flex flex-col">
                <p className="pb-2 w-full text-sm font-bold">
                  Homeowner's insurance per month
                </p>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    $
                  </span>
                  <input
                    className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                    type="text"
                    value={formatNumberWithCommas(
                      sharedData.homeownerinsurance
                    )}
                    onKeyUp={(e) => {
                      handleValidKey(e);
                    }}
                    onChange={(e) => {
                      handleValidInput(e, "homeownerinsurance");
                    }}
                  />
                </div>
              </div>
              <div className="pb-4 relative flex flex-col">
                <p className="pb-2 w-full text-sm font-bold">PMI per month</p>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    $
                  </span>
                  <input
                    className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                    type="text"
                    value={formatNumberWithCommas(sharedData.pmipermonth)}
                    onKeyUp={(e) => {
                      handleValidKey(e);
                    }}
                    onChange={(e) => {
                      handleValidInput(e, "pmipermonth");
                    }}
                  />
                </div>
              </div>
              <div className="pb-4 relative flex flex-col">
                <p className="pb-2 w-full text-sm font-bold">
                  HHOA fees per month
                </p>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    $
                  </span>
                  <input
                    className="py-2 px-5 border border-zinc-500 rounded-md hover:bg-blue-100/50 focus:border-blue-700 focus:outline-none w-full appearance-none"
                    type="text"
                    value={formatNumberWithCommas(sharedData.hoafee)}
                    onKeyUp={(e) => {
                      handleValidKey(e);
                    }}
                    onChange={(e) => {
                      handleValidInput(e, "hoafee");
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}