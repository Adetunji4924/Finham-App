import Footer from "../Components/Footer";
import PaymentHeader from "./Payment-header";
import { useState } from "react";
import "./payment.css";
import "react-datepicker/dist/react-datepicker.css";
const PaymentStatusCompleted2 = () => {
  const steps = [
    "Payment Info",
    "Payments Options",
    "Payer Information",
    "Student Details",
    "Invoice Generation",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div className="bg-[#FBFBFB]">
      <PaymentHeader />
      <div className="flex justify-center items-center py-[3rem]">
        <div className="bg-white border border-[#F1F1F1] rounded w-[90%] md:w-[80%] px-[1rem] md:px-[2rem] py-[2rem]">
          <div className="md:flex justify-center gap-5 hidden">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                }`}
              >
                <div className="step w-12 h-12 flex items-center justify-center bg-white border-2 border-secondary-0 z-10 relative rounded-full font-semibold text-secondary-0">
                  {i + 1 < currentStep || complete ? (
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1668 1L6.00016 10.1667L1.8335 6"
                        stroke="#1F39C4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="step-text font-Inter text-[.8rem] pt-4">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center md:hidden">
            <p className="text-center text-[.9rem] font-Inter text-gray-600">
              Step 4
            </p>
            <p className="text-center mt-2 text-[.9rem] font-Inter text-gray-800 font-medium">
              Invoice Generation
            </p>
          </div>

          <div>
            <hr className="my-8 mx-4 bg-[#F1F1F1]" />
          </div>

          <div className="alert flex items-center gap-2 border border-[#91D6A8] rounded-md bg-[#E7F6EC] px-4 py-4">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.500092"
                  width="31"
                  height="31"
                  rx="3.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.500092"
                  width="31"
                  height="31"
                  rx="3.5"
                  stroke="#91D6A8"
                />
                <path
                  d="M14 15.3334L16 17.3334L22.6667 10.6668M22 16.0001V20.6668C22 21.0204 21.8595 21.3595 21.6095 21.6096C21.3594 21.8596 21.0203 22.0001 20.6667 22.0001H11.3333C10.9797 22.0001 10.6406 21.8596 10.3905 21.6096C10.1405 21.3595 10 21.0204 10 20.6668V11.3334C10 10.9798 10.1405 10.6407 10.3905 10.3906C10.6406 10.1406 10.9797 10.0001 11.3333 10.0001H18.6667"
                  stroke="#039855"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="font-Inter text-[.9rem] md:text-[1rem] text-gray-900 font-semibold">
                Payment Status
              </p>
              <span className="font-Inter text-[.8rem] md:text-[.9rem] text-gray-600">
                Payment Complete
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-Inter text-gray-800 text-[1rem] md:text-[1.1rem] font-semibold">
              Payment Completed
            </p>
            <span className="font-Inter text-gray-600 text-[.8rem] md:text-[.9rem]">
              Please download your payment invoice below. You will also receive
              an email copy of these payment receipt to arala@email.com{" "}
            </span>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
              className="rounded-md bg-[#002147] px-[3rem] py-[.6rem] border border-[#002147] hover:border-secondary-0 font-Inter text-white font-medium hover:bg-secondary-0 transition ease-in-out delay-100"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentStatusCompleted2;
