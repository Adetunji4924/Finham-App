import { Button } from "@mui/material";
import { HiCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyPound } from "react-icons/hi2";
import { HiCurrencyEuro } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";

const rateData = [
  {
    id: 1,
    currency: "GBP",
    currencyValue: "1 GBP",
    currencyNaira: "1000 NGN",
    lastUpdated: "15-08-2024",
    currencyIcon: <HiCurrencyPound />,
  },

  {
    id: 2,
    currency: "USD",
    currencyValue: "1 USD",
    currencyNaira: "1000 NGN",
    lastUpdated: "15-08-2024",
    currencyIcon: <HiCurrencyDollar />,
  },

  {
    id: 3,
    currency: "EUR",
    currencyValue: "1 EUR",
    currencyNaira: "1000 NGN",
    lastUpdated: "15-08-2024",
    currencyIcon: <HiCurrencyEuro />,
  },

  {
    id: 4,
    currency: "CAD",
    currencyValue: "1 CAD",
    currencyNaira: "1000 NGN",
    lastUpdated: "15-08-2024",
    currencyIcon: <HiCurrencyDollar />,
  },
];

const ExchangeRateTable = ({data}) => {
    return (
        <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="text-start"></th>
            <th>Currency</th>
            <th>Exchange Rate</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-y border-gray-200 last:border-0">
              <td className="currency-icon text-[3rem] mb-0">{item.currencyIcon}</td>
              <td>{item.currency}</td>
              <td><div className="flex justify-center items-center gap-2">{item.currencyValue} <FaLongArrowAltRight /> {item.currencyNaira}</div></td>
              <td>{item.lastUpdated}</td>
              <td>
                <Button>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

const ExchangeRate = () => {
  
  return (
    <div className="overflow-x-auto">
      <div className="bg-white mt-8 px-4 py-4 rounded-lg overflow-x-auto shadow-sm">
        <ExchangeRateTable data={rateData} />
      </div>
    </div>
  );
};

export default ExchangeRate;

// const Currency = () => {
//   return (
//     <div className="overflow-x-auto">
//       {/* <TransactionTable /> */}
//       <div className="bg-white mt-8 px-4 py-4 rounded-lg overflow-x-auto">
//         <ExchangeRateTable data={rateData} />
//       </div>
//     </div>

//     <div className="flex justify-between items-center bg-white px-8 py-4 rounded-lg shadow-sm">
//       <div className="">
//         <span className="text-secondary-0">{props.currencyIcon}</span>
//       </div>
//       <div>
//         <h1 className="text-[1rem] font-medium font-Inter text-center text-gray-950">
//           Currency
//         </h1>
//         <p className="text-[1.2rem] font-medium font-Inter text-[#718EBF] text-center mt-4">
//           {props.currency}
//         </p>
//       </div>

//       <div>
//         <h1 className="text-[1rem] font-medium font-Inter text-center text-gray-950">
//           Exchange Rate
//         </h1>
//         <p className="flex items-center gap-2 text-[1.2rem] font-medium font-Inter text-[#718EBF] text-center mt-4">
//           {props.currencyValue}{" "}
//           <span className="material-symbols-outlined">trending_flat</span>{" "}
//           {props.currencyNaira}
//         </p>
//       </div>

//       <Button className="text-secondary-0">Update</Button>
//     </div>
//   );
// };
