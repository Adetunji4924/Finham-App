const TransactionTable = ({ data }) => {
  return (
    <div>
      <table className="w-full table-auto overflow-x-auto">
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
            <tr key={index}>
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
