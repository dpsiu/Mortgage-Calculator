export function HowTo() {
  return (
    <>
      <div className="flex flex-col flex-wrap md:m-10">
        <div>
          <h1 className="text-3xl font-semibold border-b-2 border-gray-500 py-4 m-4">
            Calculating Your Monthly Mortgage
          </h1>
          <p className="mx-4 text-lg">
            This mortgage calculator estimates your monthly mortgage payment
            based on a number of factors. Your mortgage payment includes your
            principal and interest, down payment, loan term, homeowners
            insurance, property taxes, and HOA fees. This gives you the ability
            to compare a number of different home loan scenarios and how it will
            impact your budget.
          </p>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="flex flex-col md:min-w-1/3 md:max-w-xl">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 py-4 m-4">
              Deciding on how much house you can afford
            </h3>
            <p className="mx-4 text-lg">
              As a general rule, when buying a home you should try to keep your
              house payment lower than 30% of your gross monthly income. This
              should include mortgage interest, property taxes, HOA fees, and
              maintenance. If you choose to go above that percentage, it could
              impact you financially by taking away the ability to save or pay
              for unforeseen expenses. Use our affordability calculator to help
              you determine how much house you can afford.
            </p>
          </div>
          <div className="flex flex-col md:min-w-1/3 md:max-w-xl">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 py-4 m-4">
              How to lower your monthly mortgage payment
            </h3>
            <p className="mx-4 text-lg">
              There are a number of things that you can do to help lower your
              monthly mortgage payment if you can't afford the home of your
              dreams. Try different scenarios on our mortgage calculator, but
              some ways to reduce your mortgage payment are as follows: Improve
              your credit score Put 20% down or as much as you can for your down
              payment Try to avoid PMI (private mortgage insurance) if you can
              Choose a longer-term mortgage like a 30-year rather than a 15-year
              loan Get a lower mortgage interest rate by shopping around to
              different lenders
            </p>
          </div>
          <div className="flex flex-col md:min-w-1/3 md:max-w-xl">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 py-4 m-4">
              How to calculate your mortgage payment
            </h3>
            <p className="mx-4 text-lg">
              The formula we use in our mortgage calculator is: P = L*(c*(1 +
              c)^n)/((1 + c)^n - 1), where:
            </p>
            <ul className="mt-4 mx-4 text-lg">
              <li>P = Monthly mortgage payment</li>
              <li>L = Mortgage loan amount</li>
              <li>C = Your mortgage interest rate</li>
              <li>
                N = Number of monthly payments over the lifetime of the mortgage
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:min-w-1/3 md:max-w-xl">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 py-4 m-4">
              What type of mortgage is right for me?
            </h3>
            <p className="mx-4 text-lg">
              Each situation is different, but here are some guiding principles
              for each type of mortgage: 30-year fixed-rate mortgage - The most
              common option, typically has a lower monthly payment and your
              payment doesn't change. 15-year fixed-rate mortgage- Similar to
              the 30-year fixed-rate mortgage, this option pays off your
              mortgage in 15 years, saving you money on interest. 7-year ARM -
              ARM stands for an adjustable-rate mortgage which means your
              interest rate can fluctuate after 7 years. Generally, this is best
              used if you know you'll be in the home for less than 7 years
              because the interest rate could go up after those 7 years. 5-year
              ARM - Similar to the 7-year ARM, but the interest rate can change
              after 5 years FHA 30-year fixed - Best for homebuyers with lower
              credit scores. Also, a great option if you want to put down a
              smaller down payment. VA loan - 30-year fixed-rate for qualifying
              veterans and active military. The benefit of this loan is not
              being required to put any money down and avoiding PMI. Jumbo
              funding - These are for loan amounts that exceed conventional loan
              limits
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold border-b-2 border-gray-500 py-4 m-4">
            Terms Explained
          </h1>
          <p className="mx-4 text-lg">
            Using an online mortgage calculator can help you quickly and
            accurately predict your monthly mortgage payment with just a few
            pieces of information. It can also show you the total amount of
            interest you"ll pay over the life of your mortgage. To use this
            calculator, you"ll need the following information:
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Home price</span> - This is the dollar amount you expect to pay for a home.
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Down payment</span> - The down payment is money you give to the home's
            seller. At least 20 percent down typically lets you avoid mortgage
            insurance.
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Loan amount</span> - If you're getting a mortgage to buy a new home, you
            can find this number by subtracting your down payment from the
            home's price. If you're refinancing, this number will be the
            outstanding balance on your mortgage.
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Loan term (years)</span> - This is the length of the mortgage you're
            considering. For example, if you're buying a home, you might choose
            a mortgage loan that lasts 30 years, which is the most common, as it
            allows for lower monthly payments by stretching the repayment period
            out over three decades. On the other hand, a homeowner who is
            refinancing may opt for a loan with a shorter repayment period, like
            15 years. This is another common mortgage term that allows the
            borrower to save money by paying less total interest. However,
            monthly payments are higher on 15-year mortgages than 30-year ones,
            so it can be more of a stretch for the household budget, especially
            for first-time homebuyers.
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Interest rate</span> - Estimate the interest rate on a new mortgage by
            checking Bankrate's mortgage rate tables for your area. Once you
            have a projected rate (your real-life rate may be different
            depending on your overall financial and credit picture), you can
            plug it into the calculator.
          </p>
          <p className="mx-4 text-lg">
            <span className="font-bold">Loan start date</span> - Select the month, day and year when your mortgage
            payments will start.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
