const TransactionTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="text-start">SL No</th>
            <th>Invoice Number</th>
            <th>Date</th>
            <th>Amount (₦)</th>
            <th>Amount ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-y border-gray-200 last:border-0">
              <td>{item.SlNo}</td>
              <td>{item.InvoiceNumber}</td>
              <td>{item.Date}</td>
              <td>{item.AmountNaira}</td>
              <td>{item.AmountDollars}</td>
              <td>{item.Status}</td>
              <td>
                <button>Repay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
