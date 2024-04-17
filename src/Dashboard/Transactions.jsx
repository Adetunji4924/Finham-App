import DashboardHeader from "./Dashboard-Header"
import SideBar from "./Dashboard-sidebar"
import TransactionCard from "./transaction-cards"
import "./dashboard.css"

const Transactions = () => {
    return (
        <div className="bg-[#F5F7FA] flex gap-0 md:gap-0.5 overflow-hidden">
            <SideBar />
            <div className="w-full">
                <DashboardHeader />
                <div className="px-8 py-8 ">
                    {/* for the boxes */}
                    <div className="flex flex-wrap md:flex-nowrap justify-between overflow-auto md:overflow-hidden">
                        <TransactionCard
                            label="Business"
                            amount="$500,000"
                            iconUrl="./src/images/Group 293.svg" 
                        />
                        <TransactionCard
                            label="Corporate"
                            amount="$100,000"
                            iconUrl="./src/images/Group 290.svg" 
                        />
                        <TransactionCard
                            label="Personal"
                            amount="$50,000"
                            iconUrl="./src/images/Group 299.svg" 
                        />
                        <TransactionCard
                            label="Custom"
                            amount="Money"
                            iconUrl="./src/images/Group 296.svg" 
                        />
                    </div>
                    {/* Transaction table */}
                    <div className="mt-8">
                        <p className="font-Inter font-semibold text-[1.3rem] text-gray-900 mb-4">Transaction Updates</p>
                        <div className="bg-white px-4 py-4 rounded-lg">
                            <table className="w-full table-auto">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions