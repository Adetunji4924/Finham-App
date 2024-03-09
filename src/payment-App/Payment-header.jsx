import { Link } from "react-router-dom";

const PaymentHeader = () => {
  return (
    <div className="flex justify-between items-center z-50 bg-white border-gray-100 border-b-2 md:px-[3rem] lg:px-[5rem] px-[1rem] py-[1rem] backdrop-blur-md bg-opacity-70">
      <Link to="/" relative="path">
        <img
          src="src/images/MASTERLOGO (Black)-1 1.png"
          alt="Finham Logo"
          className="xsm:w-[100%] w-[70%]"
        />
      </Link>

      <div className="flex justify-center items-center gap-2">
        <span className="font-Inter text-[.8rem] text-gray-800 font-medium">
          Secure
        </span>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66667 7.33333V4.66666C3.66667 3.78261 4.01786 2.93476 4.64298 2.30964C5.2681 1.68452 6.11595 1.33333 7 1.33333C7.88406 1.33333 8.7319 1.68452 9.35702 2.30964C9.98214 2.93476 10.3333 3.78261 10.3333 4.66666V7.33333M2.33333 7.33333H11.6667C12.403 7.33333 13 7.93028 13 8.66666V13.3333C13 14.0697 12.403 14.6667 11.6667 14.6667H2.33333C1.59695 14.6667 1 14.0697 1 13.3333V8.66666C1 7.93028 1.59695 7.33333 2.33333 7.33333Z"
            stroke="#1D2939"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default PaymentHeader;
