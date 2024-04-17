// import {useTable} from "react-table"
// import TableData from "../lib/tabledata.jsx"
// import { useMemo } from "react"
import TransactionCard from "../transaction-cards"

// import TransactionTable from "../components/transaction-table"

const Transactions = () => {
// const data = useMemo(() => TableData, []);
// const columns = useMemo(() => [
//     {
//         Header: "SL No",
//         accessor: "SlNo" // Accessor corrected
//       },
//       {
//         Header: "Amount",
//         accessor: "Amount" // Accessor corrected
//       },
//       {
//         Header: "Duration",
//         accessor: "Duration" // Accessor corrected
//       },
//       {
//         Header: "Date",
//         accessor: "Date" // Accessor corrected
//       },
//       {
//         Header: "Left To Repay",
//         accessor: "Lefttorepay" // Accessor corrected
//       },
//       {
//         Header: "Charges",
//         accessor: "Charges" // Accessor corrected
//       }
// ], []);

// const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

    return(
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
                <div className="bg-white px-4 py-4 rounded-lg overflow-x-auto">
                            <table className="w-full table-auto overflow-x-auto">
                                <thead>
                                    <tr>
                                        <th className="text-start">SL No</th>
                                        <th>Amount</th>
                                        <th>Duration</th>
                                        <th>Date</th>
                                        <th>Left to repay</th>
                                        <th>Charges</th>
                                        <th>Repay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>2.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>3.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>4.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>5.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>6.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr>
                                        <td>7.</td>
                                        <td>$100,000</td>
                                        <td>8 months</td>
                                        <td>12-08-2024</td>
                                        <td>$20,000</td>
                                        <td>$50</td>
                                        <td><button>Repay</button></td>
                                    </tr>

                                    <tr className="total">
                                        <td>Total</td>
                                        <td>$100,000,000</td>
                                        <td></td>
                                        <td></td>
                                        <td>$100,000</td>
                                        <td>$1000</td>
                                        {/* <td><button>Repay all</button></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                {/* <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} key={column.id}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} key={row.id}>
                                  {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} key={cell.column.id}>
                                        {cell.render("cell")}
                                    </td>
                                  ))}  
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default Transactions