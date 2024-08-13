import TransactionTable from "../components/transaction-table";
import TransactionCard from "../transaction-cards";
import TableData from "../lib/tabledata";


const Transactions = () => {
  return (
    <div className="">
      {/* for the boxes */}
      <div className="flex justify-between gap-4 flex-wrap">
        <TransactionCard
          label="Business"
          amount="$500,000"
          iconUrl="../src/images/Group 293.svg"
        />
        <TransactionCard
          label="Corporate"
          amount="$100,000"
          iconUrl="../src/images/Group 290.svg"
        />
        <TransactionCard
          label="Personal"
          amount="$50,000"
          iconUrl="../src/images/Group 299.svg"
        />
        <TransactionCard
          label="Custom"
          amount="Money"
          iconUrl="../src/images/Group 296.svg"
        />
      </div>

      <div className="overflow-x-auto">
        {/* <TransactionTable /> */}
        <div className="bg-white mt-8 px-4 py-4 rounded-lg overflow-x-auto">
          <TransactionTable data={TableData} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
