const Invoice = () => {
    return (
        <div className="px-8 py-8">
            <div className="header flex justify-between items-center">
                <img src="src/images/MASTERLOGO (Black)-1 1.png" alt="Finham Logo" />
                <h1 className="font-Inter text-[1.2rem] font-bold text-gray-800">Invoice</h1>
            </div>
            <div className="py-4">
                <p className="font-Inter text-[1rem] font-bold text-gray-600">Finham</p>
                <p className="font-Inter text-[.8rem] text-gray-600">Figurative Avenue Lagos Nigeria</p>
                <span className="font-Inter text-[.7rem] text-[#334BC8]">Support@finham.com</span>
            </div>
            <div>
                <hr className="border-gray-200"/>
            </div>
            <div className="py-4">
                <h1 className="font-Inter text-[.8rem] font-bold text-gray-700 mb-4">Invoice Details</h1>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="font-Inter text-[.7rem] text-[#60737D]">Issued on</span>
                            <p className="font-Inter text-[.7rem] text-[#121722]">December 7, 2022</p>
                        </div>
                        <div>
                            <span className="font-Inter text-[.7rem] text-[#60737D]">Invoice ID</span>
                            <p className="font-Inter text-[.7rem] text-[#121722]">#00112233</p>
                        </div>
                    </div>
                    <div>
                        <span className="font-Inter text-[.7rem] text-[#60737D]">Student:</span>
                        <p className="font-Inter text-[.8rem] font-semibold text-[#121722]">Abdullahi Arala</p>
                        <p className="font-Inter text-[.7rem] text-[#121722]">Foundation Metropolis Lagos</p>
                    </div>
                </div>
            </div>

            <div>
                <hr className="border-gray-200"/>
            </div>

            <div className="py-4">
                <h1 className="font-Inter text-[.8rem] font-bold text-gray-700 mb-4">Description</h1>
                <div className="flex justify-between items-center">
                    <p className="font-Inter text-[.8rem] text-[#121722]">Tuition Fee Payment for: <span className="font-medium">Waster University</span></p>
                    <div className="flex justify-between items-center gap-4 bg-[#F9FAFB] p-4 rounded-lg">
                        <span className="font-Inter text-[.7rem] text-[#60737D]">Total <span className="text-[#121722]">(NGN)</span></span>
                        <p className="font-Inter font-bold text-[1rem] text-[#121722]">14,000,000.00</p>
                    </div>
                </div>
            </div>

            <div>
                <hr className="border-gray-200" />
            </div>

            <div className="py-4">
            <h1 className="font-Inter text-[.8rem] font-bold text-gray-700 mb-4">Payment Instructions</h1>
            <p className="font-Inter text-[.8rem] text-gray-800">Ensure your payment via <span className="font-semibold">Bank transfer</span> is initiated by February 01, 2024, so that your educational service provider receives the funds within 3 business days from Finham. s</p>
            <p className="font-Inter text-[.8rem] text-gray-800"><span className="font-semibold">Amount:</span> NGN 14,000,000.00</p>
            <p className="font-Inter text-[.8rem] text-gray-800"><span className="font-semibold">Bank:</span> Access Bank</p>
            <p className="font-Inter text-[.8rem] text-gray-800"><span className="font-semibold">Account Number:</span> 0011223344</p>
            <p className="font-Inter text-[.8rem] text-gray-800"><span className="font-semibold">Account Name:</span> Finhampay Services</p>
            </div>

            <div>
                <hr className="border-gray-200"/>
            </div>

            <div className="py-4">
                <p className="font-Inter text-[.8rem] text-gray-800">For further support about your payment, please contact our friendly team at support@finham.com.</p>
            </div>

        </div>
    )
}

export default Invoice