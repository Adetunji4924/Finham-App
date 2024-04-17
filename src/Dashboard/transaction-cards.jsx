// Transaction cards component
const TransactionCard = (props) => {
    return (
        <div className="bg-white flex items-center justify-center rounded-lg gap-4 px-4 py-4 md:w-[23%] w-[100%] shadow-sm">
            <div className="flex-1">
                <img className="" src={props.iconUrl} alt="" />
            </div>
            <div className="flex-1">
                <p className="font-Inter text-[#718EBF] text-[.7rem] md:text-[.9rem] break-words">{props.label}</p>
                <p className="font-Inter text-[1rem] md:text-[1.2rem] font-semibold text-gray-900 break-words">{props.amount}</p>
            </div>
        </div>
    )
} 

export default TransactionCard