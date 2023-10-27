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

  const monthlyPayment = sharedData.monthlyPayment
  const optionalExpenses = (propertyTax + hoaInsurance + pmi + hoafee)
  const principalandinterest = (monthlyPayment-optionalExpenses)
  console.log('princ&Interest:' + principalandinterest)
  console.log('optionalExpenses:' + optionalExpenses)
  console.log('monthlyPayment:' + monthlyPayment)
  

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
        label: "Price: ",
        data: [principalandinterest, propertyTax, hoaInsurance, pmi, hoafee],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(120, 0, 120, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(120, 0, 120, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
