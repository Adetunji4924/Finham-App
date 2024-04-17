import { useState } from 'react';

const PaymentStatusChecker = () => {
  // State to hold the payment reference number entered by the user
  const [paymentRefNumber, setPaymentRefNumber] = useState('');
  // State to hold the payment status
  const [paymentStatus, setPaymentStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fakePaymentStatus = Math.random() < 0.5 ? 'Successful' : 'Failed';
    setPaymentStatus(fakePaymentStatus);
  };

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='bg-white shadow-md px-4 py-10 rounded border'>
        <div className='mb-8'>
            <img src="src/images/MASTERLOGO (Black)-1 1.png" alt="" />
        </div>
      <h2 className='text-[1.5rem] font-Bricolage font-semibold mb-4 text-gray-800'>Check Payment Status</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='text-gray-600 font-Inter'>
          Enter Payment Reference Number:
          <input
            type="text"
            value={paymentRefNumber}
            onChange={(e) => setPaymentRefNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-5 mb-4 font-Inter text-[12px] text-gray-700 leading-tight focus:border-secondary-0 focus:outline-none focus:shadow-outline"
          />
        </label>
        <button type="submit" className='text-[1rem] font-Inter border bg-secondary-0 text-white rounded py-2 px-2 font-medium mt-4'>Check Status</button>
      </form>
      {/* Display payment status if available */}
      {paymentStatus && (
        <div className='flex gap-4 mt-4'>
          <h3 className='font-Inter text-[1rem] font-semibold text-gray-900'>Payment Status:</h3>
          <p className={`font-Inter font-bold ${paymentStatus === "Successful" ? "text-green-600" : "text-red-600" }`}>{paymentStatus}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default PaymentStatusChecker;
