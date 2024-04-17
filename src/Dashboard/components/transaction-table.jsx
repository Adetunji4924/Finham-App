import MUIDataTable from "mui-datatables";

const TransactionTable = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
       ];

       const options = {
        selectableRows: false,
      };

    return(
        <div>
            <MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
        </div>
    )
}

export default TransactionTable