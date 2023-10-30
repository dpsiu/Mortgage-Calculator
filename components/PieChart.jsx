import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSharedContext } from "../src/SharedContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const { sharedData, setSharedData } = useSharedContext();
  const propertyTax = sharedData.propertytax;
  const hoaInsurance = sharedData.homeownerinsurance;
  const pmi = sharedData.pmipermonth;
  const hoafee = sharedData.hoafee;

  const monthlyPayment = sharedData.monthlyPayment;
  const optionalExpenses = propertyTax + hoaInsurance + pmi + hoafee;
  const principalandinterest = monthlyPayment - optionalExpenses;

  // console.log('homeprice: ' + sharedData.homeprice)
  // console.log('downpayment: ' + sharedData.downpayment)
  // console.log('loanterm: ' + sharedData.loanterm)
  // console.log('homeinterestrateprice: ' + sharedData.interestrate)

  // console.log('propertytax: ' + sharedData.propertytax)
  // console.log('homeownerinsurance: ' + sharedData.homeownerinsurance)
  // console.log('pmipermonth: ' + sharedData.pmipermonth)
  // console.log('hoafee: ' + sharedData.hoafee)
  // console.log('monthlyPayment: ' + sharedData.monthlyPayment)

  const data = {
    labels: [
      "Principal & Interest",
      "Property Tax",
      "Homeowner's Insurance",
      "PMI",
      "HOA fees",
    ],
    datasets: [
      {
        label: "Price",
        data: [principalandinterest, propertyTax, hoaInsurance, pmi, hoafee],
        backgroundColor: [
          "rgba(44, 143, 242, 0.2)",
          "rgba(255, 80, 95, 0.2)",
          "rgba(244, 184, 45, 0.2)",
          "rgba(59, 226, 131, 0.2)",
          "rgba(212, 45, 244, 0.2)",
        ],
        borderColor: [
          "rgba(44, 143, 242, 1)",
          "rgba(255, 80, 95, 1)",
          "rgba(244, 184, 45, 1)",
          "rgba(59, 226, 131, 1)",
          "rgba(212, 45, 244, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
          labels: {
              // This more specific font property overrides the global property
              font: {
                  size: 16
              }
          }
      }
  },
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options}/>;
}
