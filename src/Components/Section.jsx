const Section = () => {
    return (
        <div className="bg-gray-100 flex justify-between">
            <div className="bg-left bg-cover bg-no-repeat bg-center w-[50%] pl-[5rem] flex flex-col justify-center gap-3">
                <h2 className="font-Inter text-[0.9rem] text-gray-200 font-semibold">International Tuition Payments</h2>
                <h1 className="font-Bricolage text-[3rem] text-white font-semibold">Simplifying Global Education Transactions</h1>
                <p className="font-Inter text-[1rem] text-gray-200 font-normal">Managing tuition payments on a global scale, ensuring a frictionless experience that allows you to pay for your tuition easily</p>
                <div className="mt-4">
                    <button className="text-Inter text-gray-800 font-medium bg-white rounded px-5 py-4 hover:bg-secondary-0 hover:text-white ease-in-out transition delay-100">Make a Payment</button>
                </div>
            </div>
            <div>
                <img src="./src/images/Group 8.png" alt="" />
            </div>
        </div>
    )
}

export default Section