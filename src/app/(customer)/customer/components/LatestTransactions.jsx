import React from "react";

const transactions = [
  {
    title: "Transaction Closed",
    date: "10.01.2024",
    code: "ORA.PA",
    value: "+$1,82",
  },
  {
    title: "Transaction Closed",
    date: "10.01.2024",
    code: "ORA.PA",
    value: "+$1,82",
  },
  {
    title: "Transaction Closed",
    date: "10.01.2024",
    code: "ORA.PA",
    value: "+$1,82",
  },
  {
    title: "Transaction Closed",
    date: "10.01.2024",
    code: "ORA.PA",
    value: "+$1,82",
  },
  {
    title: "Transaction Closed",
    date: "10.01.2024",
    code: "ORA.PA",
    value: "+$1,82",
  },
];

const LatestTransactions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4">
      <p className="text-[#9291A5] text-center text-xs">Statistics</p>
      <p className="text-center text-lg font-bold">Latest Transactions</p>
      <div className="w-full h-0.5 bg-[#E5E5EF]"></div>
      <div>
        <ul>
          {transactions.map((transaction, i) => (
            <li key={i}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold">
                    <span className="text-red-500 font-bold inline">
                      {transaction.title}
                    </span>{" "}
                    {transaction.date}
                  </p>
                  <p>{transaction.code}</p>
                </div>
                <p className="text-[#439F3F] font-bold">{transaction.value}</p>
              </div>
              <div className="w-full h-0.5 bg-[#E5E5EF] my-4"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestTransactions;
